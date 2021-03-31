function TheFooter (props) {
  return (
    <div className={ ['theFooter', props.hide ? 'hideFooter g-hidden' : 'showFooter'].join(' ') }>
      <p>底部</p>
      <p>版权。。。。</p>
      <p>内容。。。。</p>
      <p>。。。。。</p>
      <div className='close hidden' onClick={ hideFooter }><span /></div>
    </div>
  )

  function hideFooter () {
    props.hideFooter()
  }
}

export default TheFooter
