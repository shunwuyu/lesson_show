import React from "react";
import { getRankingList } from '@/api/ranking'
import * as RankingModel from '@/model/ranking'
import Scroll from '@/common/scroll/Scroll'
import Loading from '@/common/loading/Loading'
import {CODE_SUCCESS} from '@/api/config'
import LazyLoad, { forceCheck } from 'react-lazyload' 
import { Route } from 'react-router-dom'
import RankingInfo from '@/containers/Ranking'
import "./ranking.styl"

class Ranking extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      loading: true,
      rankingList: [],
      refreshScroll: false
    }
  }

  componentDidMount () {
    getRankingList().then((res) => {
      console.log('获取排行榜：');
      if (res) {
        console.log(res);
        if (res.code === CODE_SUCCESS) {
          let topList = [];
          res.data.topList.forEach(item => {
            if (/MV/i.test(item.topTitle)) {
              return;
            }
            topList.push(RankingModel.createRankingByList(item));
          });
          this.setState({
            loading: false,
            rankingList: topList
          }, () => {
            this.setState({
              refreshScroll: true
            })
          })
        }
      }
    })
  }

  render () {
    let { match } = this.props;
    return (
      <div className="music-ranking">
        <Scroll refresh={this.state.refreshScroll}
        onScroll={() => { forceCheck(); }}
        >
          <div className="ranking-list">
          {
            this.state.rankingList.map(ranking => {
              return (
                <div className="ranking-wrapper" key={ranking.id}
                  onClick={this.toDetail(`${match.url + '/' + ranking.id}`)}
                >
                  <div className="left">
                    <LazyLoad height={100}>
                      <img src={ranking.img} alt={ranking.title}/>
                    </LazyLoad>
                  </div>
                  <div className="right">
                    <h1 className="ranking-title">
                      {ranking.title}
                    </h1>
                    {
                      ranking.songs.map((song, index) => {
                        return (
                          <div className="top-song" key={index}>
                            <span className="index">{index + 1}</span>
                            <span>{song.name}</span>
                            &nbsp;-&nbsp;
                            <span className="song">{song.singer}</span>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              )
            })
          }
          </div>
        </Scroll>
        <Loading title="正在加载..." show={this.state.loading}/>
        <Route path={`${match.url + '/:id'}`} component={RankingInfo}/>    
      </div>
    )
  }

  toDetail(url) {
    return () => {
      this.props.history.push({
        pathname: url
      })
    }
  }
}

export default Ranking