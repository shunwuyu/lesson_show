import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Header, Icon, Container } from 'semantic-ui-react'
import { fetchLocationByIp } from '../actions'

class Location extends Component {
  constructor(props) {
    super(props)

    this.getLocation = this.getLocation.bind(this)
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchLocationByIp())
  }

  getLocation() {
    const locationById = this.props.locationByIp
    const locationByInput = this.props.locationByInput

    let location = ''

    if (locationByInput.status !== 'init') {
      const { status, cityName } = locationByInput

      // if (status === 'success') {
      //   location = cityName
      // } else {
      //   location = '请手动输入城市'
      // }

      if (status === 'success') {
        location = cityName
      } else if (status === 'start') {
        location = '查询中...'
      } else {
        location = '请手动输入城市'
      }
    } else {
      const { status, cityName } = locationById

      if (status === 'init') {
        location = '正在加载 . . .'
      } else if (status === 'start') {
        location = '定位中 . . .'
      } else if (status === 'success') {
        location = cityName
      } else if (status === 'failure') {
        location = '定位失败，请手动输入城市'
      }
    }

    return location
  }

  render() {
    const location = this.getLocation()

    return (
      <Container text style={{ marginTop: '1em' }}>
        <Header
          as="h3"
          textAlign="center"
          dividing
          style={{ fontSize: '19px', fontWeight: '300' }}
        >
          <Icon name="point" disabled />
          {location}
        </Header>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  locationByIp: state.locationByIp,
  locationByInput: state.locationByInput
})

export default connect(mapStateToProps)(Location)