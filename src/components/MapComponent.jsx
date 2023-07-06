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
      <h1 className="my-4 text-2xl font-medium text-black">Find Us At</h1>
      <h4 className="w-1/2 text-sm text-center">
        We are located at Harmony Complex Building, Room No.H18, 1st Floor,
        Kyaliwajjala-Kira Road next to Total Fuel Station Uganda.
      </h4>

      <div className="flex w-full h-full py-8 overflow-hidden rounded-lg">
        <div className="flex flex-col items-center w-full h-full bg-white justify-evenly">
          <h1 className="text-2xl font-bold"> Write to us</h1>
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
