import React, { Component } from 'react';

const TableHeader = () => {
  return (
    <thead>
      <tr>
          <th>Name</th>
          <th>Job</th>
      </tr>
    </thead>
  );
}

// const TableBody = () => {
//   return (
//     <tbody>
//         <tr>
//             <td>Charlie</td>
//             <td>Janitor</td>
//         </tr>
//         <tr>
//             <td>Mac</td>
//             <td>Bouncer</td>
//         </tr>
//         <tr>
//             <td>Dee</td>
//             <td>Aspiring actress</td>
//         </tr>
//         <tr>
//             <td>Dennis</td>
//             <td>Bartender</td>
//         </tr>
//     </tbody>
//   );
// }

const TableBody = (props) => {
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td><button className="btn btn-primary" onClick={()=>props.removeCharacter(index)}>Delete</button></td>
      </tr>
    )
  })
  return <tbody>{rows}</tbody>;
}

class Table extends Component {
  render () {
    const { characterData, removeCharacter } = this.props;
    console.log(characterData);
    return (
      <table className="table table-striped">
        <TableHeader />
        <TableBody
         characterData={characterData}
         removeCharacter={removeCharacter}
         />
      </table>
    )
  }
}

// class Table extends Component {
//   render () {
//     return (
//       <table className="table table-striped">
//         <thead>
//           <tr>
//               <th>Name</th>
//               <th>Job</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//               <td>Charlie</td>
//               <td>Janitor</td>
//           </tr>
//           <tr>
//               <td>Mac</td>
//               <td>Bouncer</td>
//           </tr>
//           <tr>
//               <td>Dee</td>
//               <td>Aspiring actress</td>
//           </tr>
//           <tr>
//               <td>Dennis</td>
//               <td>Bartender</td>
//           </tr>
//         </tbody>
//       </table>
//     );
//   }
// }

export default Table;