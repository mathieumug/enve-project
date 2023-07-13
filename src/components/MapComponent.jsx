import React from 'react'
import GoogleMapReact from 'google-map-react'
import FaLocationDot from 'react-icons/fa'
import { Marker } from 'react-google-maps'
import ContactForm from './ContactForm'

function MapComponent() {
  const defaultProps = {
    center: {
      lat: 0.38814980689118644,
      lng: 32.64455866136656,
    },
    zoom: 15,
  }

  return (
    <div
      id="contact"
      className="flex flex-col items-center h-screen p-5 text-black bg-white "
    >
      <h1 className="my-4 text-xl font-medium text-black md:text-2xl">
        Find Us At
      </h1>
      <h4 className="w-1/2 text-xs text-center md:text-sm">
        We are located at Plot CH18, Church Road, off
        Kyaliwajjala-Kira Road just after Total Fuel Station Uganda.
      </h4>

      <div className="flex flex-col w-full h-full py-8 overflow-hidden rounded-lg md:flex-row">
        <div className="flex flex-col items-center w-full h-full bg-white justify-evenly">
          <h1 className="text-xl font-bold md:text-2xl"> Write to us</h1>
          <ContactForm />
        </div>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBHFGHpQC_02nIlByRDTSu7QoQgZCOf_Tg' }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          className="flex flex-row items-center justify-between"
        >
          <div
            className="w-3 h-3 p-3 bg-red-500 rounded-full"
            lat={0.38814980689118644}
            lng={32.64455866136656}
          />
        </GoogleMapReact>
      </div>
    </div>
  )
}

export default MapComponent
