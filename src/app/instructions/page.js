import Link from 'next/link';
import Image from 'next/image';
export default function Instructions() {
  return (
    <main className='page'>
      <div className='base'>
        <div className='container2'>
          
          <div className='titulo2'>
            <div className='buttonBox'>
              <Link href="/">
                <button className='volver'>Volver</button>
              </Link>
            </div>
            <h1><Image src="/titulo.png" width={1000} height={200} alt='titulo'></Image></h1>
          </div>
          <div className='sub-container2'>
            <div className='textContainer'>
              <div className='textContainer2'>
                <div className='justify'>
                <p> Para comenzar con esta aventura debes saber que esta partida es una ronda rápida.</p>
                <p> Tus amigos y tú han sido atrapados en la Mazmorra del Destino por un malvado arquitecto, tu objetivo es recolectar las piezas necesarias para abrir la puerta estropeada y escapar con vida. </p>
                <br/>
                <p> El dado de 20 definirá tu movimiento y el de 4 la duración de efectos.</p>
                <p> En esta partida rápida en vez de tener un mapa de 8 sectores tendrás 4. Además, que las habilidades de algunos personajes fueron nerfeadas por el bien de la partida.</p>
                <br/>
                <p> Todos los personajes inician con la misma cantidad de vida (6hp) y movimiento.</p>
                <p> Solamente puedes retroceder si tu camino está bloqueado y no tienes ningún objeto para continuar o este camino ha llegado a su fin.</p>
                <p> Cada vez que caigas en una casilla especial puedes caer en las fauces de un monstruo o recibir una carta de destino.</p>
                <ul>
                  <li>
                    <p> En caso de recibir una carta de destino, dependiendo de esta, lanza el dado de 4 caras para ver la duración de este destino.</p>
                  </li>
                  <li>
                    <p> Si caes en las fauces de un monstruo este se materializa atacará restando 1 hp.</p>  
                  </li>
                </ul>
                <br/>
                <p> Todos los objetos se consiguen a través de los cofres, una vez un personaje abre un cofre este no se puede volver a abrir por el mismo jugador, pero sí por los demás.</p>
                <br/>
                <ul>
                  <li>
                    <p> Junto a los cofres podrás encontrar un Yunque el cual sirve para armar las herramientas que se separan en piezas. (Picota y Engranajes).</p>
                  </li>
                  <li>
                    <p> Algunos objetos son acumulables y otros no, lee las especificaciones.</p>
                  </li>
                </ul>
                <p> Tras que tú o tu equipo consigan las piezas necesarias (4 engranajes) reúnanse en un cofre o con ayuda de Ferra unan sus piezas y huyan.</p>
                
              </div>
              </div>
          </div>
          </div>
        </div>
      </div>
    </main>
  );
}
