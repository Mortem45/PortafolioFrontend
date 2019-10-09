import React from 'react'
import {  useTranslation, withTranslation } from 'react-i18next'
import './project.scss'

const Project = (props) => {
    const { t } = useTranslation()
  return (
    <fieldset className='slideshow'>

      <input type='radio' id='slideCheckbox1' name='slide' defaultChecked></input>
      <div className='slide'>
        <div className='slide__content'>
          <div className='services_title'><h2>Clon Instagram</h2></div>
            <p>Esta aplicacion es un clon de instagram, que imita el flujo de trabajo y manejo de datos de la misma,
              la misma esta desarrollada de forma modular utilizando Nodejs
              esta aplicacion esta compuesta por 4 modulos principales:
              <br/>
              <br/>
              <h3>FrontEnd:</h3> Este modulo se desarrollo bajo el patron Backend for Frontend (BFF),
              se encarga de recibir las peticiones y servir el contenido
              <br/>
              <br/>
              <h3>API:</h3> este modulo se trabaja bajo microservicios abstrayendo las responsabilidades de cada uno,
              asi como permitiendo una escalabilidad de los servicios si es necesario.
              <br/>
              <br/>
              <h3>DATABASE:</h3> este es el modulo responsable del acceso a datos de la aplicacion,
              como base de datos se usa RethinkDB y un bucket de S3 de AWS

              <br/><br/>
              <h3>REALTIME:</h3> la aplicacion maneja datos en tiempo real y son gestionadas por este modulo
              que escucha los cambios ocurridos en la base de datos y notifica al frontend que hay un cambio en los datos
              que este efectue una actualizacion.
            </p>
        </div>
      </div>

      <input type='radio' id='slideCheckbox2' name='slide'></input>
      <div className='slide'>
        <div className='slide__content'>
          <div className='services_title'><h2>Kubernetes</h2></div>
          <br/>
          <br/>
          <p>Creación y configuración de un clúster de Kubernetes en un ambiente local, utilizando máquinas
          virtuales con Ubuntu Server como sistema operativo, logrando obtener un ambiente de producción de aplicaciones con alta
          disponibilidad y seguridad para estas, teniendo un repositorio de aplicaciones aislado para dicho
          clúster</p>
        </div>
      </div>

      <input type='radio' id='slideCheckbox3' name='slide'></input>
      <div className='slide'>
        <div className='slide__content'>
          <div className='services_title'><h2>DevOps</h2></div>
          <p>Creacion y configuracion de un hambiente de DevOps, donde se crea todo el flujo de trabajo del mismo
            utilizando una aplicacion basica de node.Js para hacer todo el flujo de trabajo.
          <br/>
          <br/>
          En este proyecto se uso un servicio de CircleCI para hacer las pruebas de continuous integration,
          asi como se uso Terraform para poder desplegar los servicios en la nube, usando el flujo de trabajo infrastructure as code.
          </p>
        </div>
      </div>

      <input type='radio' id='slideCheckbox4' name='slide'></input>
      <div className='slide'>
        <div className='slide__content'>
          <div className='services_title'><h2>Oauth2.0</h2></div>
          <p>
            Esta es una plataforma de microservicios segura con Oauth2.0 bajo el protocolo OpenID,
            donde
          </p>
        </div>
      </div>

      <input type='radio' id='slideCheckbox5' name='slide'></input>
      <div className='slide'>
        <div className='slide__content'>
          <div className='services_title'><h2>RECONOCIMIENTO FACIAL</h2></div>
          <p>Esta aplicacion esta desarrollada con C# usando ASP.NET como framework,
            donde se consumen los servicios de Cognetive Service de Microsoft,
            para la deteccion de rostros en una imagen y las emociones que expresan los mismos
          </p>
        </div>
      </div>

      <input type='radio' id='slideCheckbox6' name='slide'></input>
      <div className='slide'>
        <div className='slide__content'>
          <div className='services_title'><h2>IoT SENS</h2></div>
          <p>Esta es una plataforma de internet de las cosas (IoT) que tiene varios componentes que van a estar interactuando entre si
            la principal caracteristica de esta aplicacion es que trabaja con protocolos de RealTime, como MQTT y WebSocket.

            los modulos principales de la plataforma son:
            <br/><br/>
            <h3>MODULO DB:</h3> este es el encargado de realizar todas las operaciones con la DB, como consultas o almacenamiento de informacion.
            <br/><br/>
            <h3>AGENT:</h3> este es un modulo de Node.js que se va a integrar en cualquier app de Node que se necesite monitoriar.
            <br/><br/>
            <h3>MQTT SERVER:</h3> este componente es un Broker de mensajeria que se encarga de redistribuir los mensajes a quienes esten subscritos al mismo,
            en esta plataforma envia los mensajes al modulo de DB y a los clientes que pueden ser aplicaciones WEB o de CLI
            <br/><br/>
            <h3>API SERVER:</h3> aqui se realizan todas las consulatas o envio de datos al modulo DB para manipular, este nos sirva para la momento de cargar el app
            poder realizar una grafica con los ultimos valores ingresados en la DB.
            <br/><br/>
            <h3>CLIENT:</h3> los clientes para esta aplicacion pueden ser por medio de una aplicacion WEB o de CLI, donde veremos reflejados los datos que estamos monitoreando
            por medio de graficas.
          </p>
        </div>
      </div>

      <input type='radio' id='slideCheckbox7' name='slide'></input>
      <div className='slide'>
        <div className='slide__content'>
          <div className='services_title'><h2>MortemVideo</h2></div>
          <p>MortemVideo es reproductor de peliculas y series, esta aplicacion desarrollada en ReactJs y Redux</p>
        </div>
      </div>

    </fieldset>
  )
}
export default withTranslation()(Project)
