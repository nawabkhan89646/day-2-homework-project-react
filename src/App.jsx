import './App.css'

function App() {
  return (
    <div className='main'>
      <div className='sub-main'>
        <h1>Topics Covered</h1>
        <p>The following is a list of all the topics that we cover in the MDN learnibng area.</p>
        <div>
          <a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web" target='_blank'>Getting started with the web</a>
          <p className='desc'>Provides a practical introduction to web development for completed beginners.</p>
        </div>
        <div>
          <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML" target='_blank'>HTML -- Structuring the web</a>
          <p className='desc'>HTML is the language that we used to structure the different parts of our content and define what their meaning or purpose is. This topic teaches HTML in detail.</p>
        </div>
        <div>
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target='_blank'>CSS -- Styling the web</a>
          <p className='desc'>CSS is the language that we use to control our web content's style and layout, as well as adding behavior like animation. This topic provides comprehensive covergae of CSS.</p>
        </div>
      </div>
    </div>
  )
}

export default App