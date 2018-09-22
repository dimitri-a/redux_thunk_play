// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import { connect } from 'react-redux';


// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Container />
//       </div>
//     );
//   }
// }

// const someData = (state) => {
//   return {data: state};
// }

// const actiontime = {
//   geklikt
// }

// const Container = connect(null,actiontime)(Dumb)

// class Dumb extends React.Component {
//     constructor(props)
//     {
//         super(props);
//         console.log('props',props)
//     }

//     handleClick =()=>{
//         console.log('props',this.props)
//         this.props.geklikt();
//     }

//     render() {
//         return (
//         <div>
//             hi there from Dumb

//             <button onClick={this.handleClick}>hier</button>
            
//         </div>
//         )
//     }
// }
// //reducer
// const klik = (state, action) => {
//   if (action.type == 'GEKLIKT') { }
//   console.log('reducer: klik');

//   return state
// }

// //reducer
// const data = (state = ' Bert ') => {
//   //console.log('reducer,data=', state);
//   return state;
// }

// //actioncreator
// const geklikt = ()=>({
//   type: 'GEKLIKT',
//   data: 'bla'
// });

// export default App;

