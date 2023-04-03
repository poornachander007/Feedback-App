// Write your React code here.

import {Component} from 'react'

import './index.css'

const EmojiItem = props => {
  const {details, onChange} = props
  const {name, imageUrl} = details
  const change = () => {
    onChange()
  }
  return (
    <li className="emoji_card">
      <button onClick={change} type="button">
        <img className="emoji" alt={name} src={imageUrl} />
      </button>
      <p className="emoji_name">{name}</p>
    </li>
  )
}

class Feedback extends Component {
  state = {isClickedEmoji: false}

  onChange = () => {
    this.setState(preState =>
      preState.isClickedEmoji
        ? {isClickedEmoji: false}
        : {isClickedEmoji: true},
    )
  }

  emojiContainer = () => {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <div className="content_container">
        <h1 className="heading">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="emojis_container">
          {emojis.map(eachEmoji => (
            <EmojiItem
              key={eachEmoji.id}
              onChange={this.onChange}
              details={eachEmoji}
            />
          ))}
        </ul>
      </div>
    )
  }

  thankYou = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    return (
      <div className="content_container">
        <img className="love_emoji" alt="love emoji" src={loveEmojiUrl} />
        <h1 className="heading">Thank You!</h1>
        <p className="description">
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {isClickedEmoji} = this.state
    return (
      <div className="page_container">
        {isClickedEmoji ? this.thankYou() : this.emojiContainer()}
      </div>
    )
  }
}

export default Feedback

//  <div className='content_container'></div>
