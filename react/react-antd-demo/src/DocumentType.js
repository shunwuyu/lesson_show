import React, { Component } from 'react';
import { Tag, Tooltip, Input, Icon, message } from 'antd';

export default class DocumentType extends Component {
  state = {
    inputVisible: false,
    inputValue: ''
  }

  componentDidMount = () => {
    this.setState({
      tags: this.props.tags
    })
  }

  input = React.createRef()

  render () {
    const { inputValue, inputVisible } = this.state;
    const { tags, selectedTags, plusBtnText, activeColor } = this.props;
    return (
      <div>
      {
        tags.map((tag, index) => {
          const isLongTag = tag.length > 10;
          const isSelected = selectedTags.indexOf(tag) !== -1;
          const tagElem = (
            <Tag
              key={tag}
              color={isSelected ? ( activeColor ? activeColor: '40a9ff'):''}
              closable={index !== 0}
              onClick={() => this.hightlightTag(index)}
            >
            {isLongTag ? `${tag.slice(0, 10)}...`: tag}
            </Tag>
          );
          return isLongTag ? (
            <Tooltip title={tag} key={tag}>
            {tagElem}
            </Tooltip>
          ):(
            tagElem
          );
        })
      }
      {
        inputVisible && (
          <Input
            ref={this.input} 
            type="text"
            size="small"
            style={{width: 78}}
            value={inputValue}
            onChange={this.handleInputChange}
            onBlur={this.handleInputConfirm}
            onPressEnter={this.handleInputConfirm}
            />
        )
      }
      {!inputVisible && (
        <Tag onClick={this.showInput} style={{background: '#fff', borderStyle: 'dashed'}}>
          <Icon type="plus"/>{ plusBtnText ? plusBtnText : 'New Tag'}
        </Tag>
      )}
      </div>
    )
    
  }

  handleInputChange = e => {
    this.setState({
      inputValue: e.target.value
    });
  }

  hightlightTag = index => {
    console.log(index);
    if (this.props.onChange) {
      this.props.onChange(this.getTagValueFromIndex(index));
    }
  }

  getTagValueFromIndex = index => {
    const { tags } = this.state;
    return tags[index];
  }

  handleInputConfirm = e => {
    const { inputValue, tags: prevTags, defaultValue } = this.state;
    if (inputValue === defaultValue) {
      message.error('已存在同样的类型!!!');
      this.setState({inputValue: ''});
      this.input.focus();
      return false;
    }
    if (!inputValue) {
      this.setState({ inputVisible: false, inputValue: ''});
      return false;
    }
    let tags = prevTags;
    if (inputValue && tags.indexOf(inputValue) === -1) {
      tags = [...tags, inputValue];
    }
    this.setState({
      inputVisible: false,
      inputValue: ''
    })

    if (this.props.addTag) {
      this.props.addTag(inputValue);
    }
  }
  showInput = () => {
    this.setState({
      inputVisible: true
    }, () => {
      this.input.current.focus();
    });
  }
  handleClose = removeTag => {
    if (this.props.removeTag) {
      this.props.removeTag(removeTag);
    }
  }
}