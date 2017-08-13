import React, { Component } from 'react';
import './App.css';
/*import {AsyncTypeahead} from 'react-bootstrap-typeahead';*/
import _ from 'lodash';

let map;
let sub_area;
let coordinates=[ {lat: 37.772, lng: -122.214},
          {lat: 21.291, lng: -157.821},
          {lat: -18.142, lng: 178.431},
          {lat: -27.467, lng: 153.027}
];


class App extends Component {
  

  componentDidMount(){
    map = new window.google.maps.Map(document.getElementById('map'),{
       zoom: 1,
       center: {lat: 0, lng: -180},
       zoomControl: true,
       zoomControlOptions: {
       position: window.google.maps.ControlPosition.RIGHT_CENTER
      },
      scrollwheel: true,
      streetViewControl: false,
      mapTypeControl: false,
      mapTypeId: 'terrain',
    });
/*
     sub_area = new window.google.maps.Polygon({
          paths: coordinates,
          strokeColor: '#FFC107',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#FFC107',
          fillOpacity: 0.35,
        });

       sub_area.setMap(map);
       map.setOptions({ maxZoom: 15 });*/

        for (var i = coordinates.length - 1; i >= 0; i--) {
           var marker = new window.google.maps.Marker({
           position: coordinates[i],
           map: map,
           title: 'location'+ i,
           label: 'L'+ i
          });
        };
       
          var flightPath = new window.google.maps.Polyline({
          path: coordinates,
          geodesic: true,
          strokeColor: '#FF0000',
          strokeOpacity: 1.0,
          strokeWeight: 2
        });

        flightPath.setMap(map);

  }

  /* _onSelectOptions(){
        sub_area = new window.google.maps.Polygon({
          paths: coordinates,
          strokeColor: '#FFC107',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#FFC107',
          fillOpacity: 0.35,
        });

       sub_area.setMap(map);
       map.setOptions({ maxZoom: 15 });
    }
*/
    render() {
    return (
      <div  style={{height: `100%`}}>
          
      <input
       type="button"
       value="click me for line"
       /*onClick={this._onSelectOptions.bind(this)}*/ />
                      
        <div className="maps" id="map"></div>

        <footer className="footer">
         <p>developed by <a href="https://github.com/safeimuslim">@safeimuslim</a></p>
         </footer>
      </div>
    );
  }
}

export default App;


