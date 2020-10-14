import React, { useEffect, useState } from 'react';
import mapMarketImg from '../images/map-marker.svg';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import '../styles/pages/orphanages-map.css';
import MapIcon from '../utils/mapIcon';
import api from '../services/api';

interface Orphanage{
  id: number,
  latitude: number,
  longitude: number,
  name: string,
}

function OrphanagesMap() {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([])
  useEffect(()=>{
    api.get('orphanages').then(response =>{
      setOrphanages(response.data);
    });
  },[])

  return (
      <div id="page-map">
          <aside>
              <header>
                <img src={mapMarketImg} alt="Happy"/>
                <h2>Escolha um organato no mapa</h2>
                <p>Muitas crianças estão esperando a sua visita :)</p>
              </header>

              <footer>
                  <strong>Rio de Janeiro</strong>
                  <span>Volta Redonda</span>
              </footer>
          </aside>

          <Map 
            center={[-22.5565846,-44.0675008]}
            zoom={15}
            style={{ width: '100%', height: '100%' }}
            >
              <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            
            {orphanages.map(orphanage =>{
              return(
                <Marker 
                key={orphanage.id}
                icon={MapIcon}
                position={[orphanage.latitude, orphanage.longitude]}
                >
                  <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                      {orphanage.name}
                      <Link to={`/orphanages/${orphanage.id}`}>
                          <FiArrowRight size={20} color="#FFF"/>
                      </Link>
                  </Popup>
                </Marker>
              )
            })}
          </Map>

        <Link to="/create" className="create-orphanage">
            <FiPlus size={32} color="#FFF" />
        </Link>
      </div>
  );
}

export default OrphanagesMap;
