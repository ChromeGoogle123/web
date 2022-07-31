function HomePage() {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <h1 id="switcher" style={{ fontFamily: 'fantasy', color: '#4b9be1' }}>
        {"MaxiKim's website"}
      </h1>
      <h2
        style={{
          fontFamily: 'cursive',
          color: 'rgb(243, 103, 123)',
          marginBottom: '10rem'
        }}
      >
        click some spams or tell us your name
      </h2>
      <button
        style={{
          fontFamily: 'monospace',
          padding: '1rem',
          fontSize: '2rem',
          background: 'blue',
          color: 'white'
        }}
        onClick={() => alert('ggggggggggggggggggggggggggggggggg')}
      >
        Spammer
        
      </button>
      
      <button
        style={{
          fontFamily: 'monospace',
          padding: '1rem',
          fontSize: '2rem',
          background: 'blue',
          color: 'white'
        }}
        onClick={() => alert('duckduckduckduckduckduckduckduckduckduckduckduck')}
      >
        Spammer 2
        
      </button>

            <button
        style={{
          fontFamily: 'monospace',
          padding: '1rem',
          fontSize: '2rem',
          background: 'blue',
          color: 'white'
        }}
        onClick={() => alert('yayayayayayayayayayayayayayayayayayayayayayayayaya')}
      >
        Spammer 3
        
      </button>
      
      <button
        style={{
          fontFamily: 'cursive',
          padding: '1rem',
          fontSize: '2rem',
          background: 'orange',
          color: 'white',
          marginTop: '2rem'
        }}
        onClick={() => {
          let name = prompt("What's your name?");
          if (name) {
            var changed_name = document.querySelector("#switcher")
            if (changed_name!==null){
              changed_name.innerHTML = name + "'s website"
            }
            
          } else {
            alert('Nice to meet you, stranger');
          }
        }}
      >
        {"Enter your name please!"}
      </button>
      
      <button
        id = "rainbowbutt"
        style={{
          fontFamily: 'cursive',
          padding: '1rem',
          fontSize: '2rem',
          background: 'orange',
          color: 'white',
          marginTop: '2rem'
        }}
        onClick={() => {
          let fav_color = prompt("What's your favorite color?");
          let ranibowbutt = document.querySelector("#rainbowbutt")
          if (ranibowbutt!==null){
            ranibowbutt.style.color = fav_color
          }

        }}
      >
        {"Enter your favorite color!"}
      </button>

      
    </div>
  );
}

export default HomePage;

