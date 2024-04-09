import React from 'react'

const Main = () => {
  return (
    <div style={{ textAlign: 'center', fontWeight: 800, padding: '20px' }}>
      <h1 style={{ fontWeight: 'bold' }}>TASK OF THE DAY</h1>
      {/* Button Container */}
      <div style={{  fontFamily:'initial',marginTop: '10px', display: 'flex', justifyContent: 'center', textAlign:'center', gap: '10px', flexWrap: 'wrap' }}>
        
        <button style={{ backgroundColor: 'lightgray', color: 'black', padding: '10px 20px', borderRadius: '5px', border: 'black', }}>Ongoing</button>
        <button style={{ backgroundColor: 'lightgray', color: 'black', padding: '10px 20px', borderRadius: '5px', border: 'black',  }}>Scheduled</button>
        <button style={{ backgroundColor: 'lightgray', color: 'black', padding: '10px 20px', borderRadius: '5px', border: 'black',  }}>Completed</button>
        <button style={{ backgroundColor: 'lightgray', color: 'black', padding: '10px 20px', borderRadius: '5px', border: 'black', }}>Delay</button>
        <button style={{ backgroundColor: 'lightgray', color: 'black', padding: '10px 20px', borderRadius: '5px', border: 'black',  }}>Ontime</button>
      </div>
    </div>
  )
}

export default Main;
