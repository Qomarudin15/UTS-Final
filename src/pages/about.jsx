import "./App.css";

const  data = [
  {
    judul : "Pemesanan Tiket Pesawat",
    isi : "Memungkinkan pelanggan untuk memesan tiket pesawat untuk tujuan domestik dan internasional"
  },
  {
    judul : "Pemesanan Tiket Kereta Api",
    isi : "Menawarkan layanan pemesanan tiket kereta api untuk berbagai jalur kereta api"
  },
  {
    judul :"Pemesanan Tiket Bus",
    isi : " Membantu pelanggan dalam memesan tiket bus untuk perjalanan dalam kota atau antar kota"

  },
  {
    judul :"Pemesanan Tiket Kapal Laut",
    isi :"Menyediakan pilihan pemesanan tiket kapal laut untuk perjalanan laut atau kapal pesiar"
    
  },
  {
    judul :"Pemesanan Tiket Konser atau Acara",
    isi :"Memberikan kemudahan bagi pelanggan yang ingin membeli tiket untuk konser, acara olahraga, teater, atau pertunjukan lainnya"
    
  },
  {
    judul :"Pemesanan Tiket Kereta Gantung",
    isi :"Memungkinkan pelanggan memesan tiket untuk wahana wisata, seperti taman hiburan, taman air, atau kereta gantung"
    
  },
  {
    judul :"Pemesanan Tiket Transportasi Umum",
    isi :"Menyediakan layanan pemesanan tiket transportasi umum, seperti tiket bus kota, kereta komuter, atau taksi"
    
  },
  {
    judul :"Pemesanan Tiket Event Khusus",
    isi :"Menawarkan tiket untuk acara-acara khusus, seperti festival musik, pameran seni, atau pertemuan bisnis"
    
  }
]

export function About() {
  let profileCard = data.map((about)=>{
    return (<div className="tile">
      <img className="logo"
       src={about.logo} />
    <h3>{about.judul}</h3>
    <p>{about.isi}</p>
    <i className="fas fa-wrench"></i>
  </div>)
    
  })
    return(
      <div className="about-us">
      <h2>Omar Tiket Melayani Beberapa Jenis Tiket</h2>
            <div className="tiles">
            {profileCard}           
          </div>
          
          </div>

    );
};