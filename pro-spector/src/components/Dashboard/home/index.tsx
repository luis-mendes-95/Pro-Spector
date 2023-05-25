const DashboardHome = () => {
  return (
    <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
      <h2 style={{margin:"0 0 50px 0"}}>General Details:</h2>
      <ul style={{listStyle:"none", textAlign:"center"}}>
        
        <li>
          <h3>🏢Number of clients:</h3>
          <p>37</p>
        </li>

        <li>
          <h3>☎️Number of contacts:</h3>
          <p>48</p>
        </li>

        <li>
          <h3>🥇Conversions:</h3>
          <p>8</p>
        </li>

      </ul>
    </div>
  );
};

export default DashboardHome;
