class App extends React.Component {
         constructor (props) {
          super(props)
         this.state = {
       time: new Date()
      }
   }

   render () {
      return <h1>{this.state.time.toLocaleTimeString()}</h1>
    }
}