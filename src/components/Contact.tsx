import { FC } from "react";
import { useAppSelector } from "../redux/reduxHooks";
import { HiMail } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

const Contact: FC = () => {
  const navHeight = useAppSelector(
    (store: { navHeight: any }) => store.navHeight
  );

  return (
    <section
      id="contact"
      className="space-y-12 px-8 md:px-24 md:mt-12"
      style={{ scrollMarginTop: `${navHeight}px` }}
    >
      <h1 className="text-white font-openSans text-center text-4xl font-bold mt-6 leading-tight tracking-tighter">
        ______🔴🔵⚪⚫_______
      </h1>
      <div className="flex text-white py-8 md:py-20 items-center flex-col md:flex-row">
        <div
          className="flex flex-col items-center"
          style={{ flexBasis: "50%" }}
        >
          <div className="flex flex-col space-y-8">
            <h1 className="font-medium text-4xl md:text-3xl">
            Resumen Personal:
            </h1>
            <p className="text-white-secondary text-2xl md:text-2xl ">
            Soy una persona enérgica y proactiva que disfruta trabajando en entornos dinámicos. Tengo habilidades para trabajar en equipo y de forma independiente según las necesidades, lo cual me permite adaptarme fácilmente a diferentes situaciones..</p>

            <p className="text-white-secondary text-xl md:text-2xl ">
            Estoy aprendiendo de forma constante y aplicar mis conocimientos en el ámbito profesional. Mi especialización es el diseño de sitios web con el fin de mejorar la experiencia del usuario, crear sitios dinámicos y responsivos. Me esfuerzo por garantizar la satisfacción del cliente en todo momento, buscando superar sus expectativas y asegurando la calidad del producto final.</p>

            <p className="text-white-secondary text-xl md:text-2xl">
            Estoy en busca de una oportunidad laboral en la que pueda desarrollar mis habilidades y adquirir experiencia. Ofrezco todo mi esfuerzo y compromiso para contribuir al éxito del equipo y alcanzar los objetivos propuestos.
            </p>
          </div>          
        </div>
          {/*________________________________________ */}
          <div
          className="flex flex-col items-center"
          style={{ flexBasis: "45%" }}
        >
          <div className="flex flex-col space-y-8">
            <h1 className="font-medium text-center text-2xl md:text-2xl">
            Idiomas:
            </h1>
            <p className="text-white-secondary text-center text-1xl md:text-2xl md:w-2/3">
            Namtrik Nativo / Español Nativo /  Inglés Basico</p>
          </div>          
        </div>
        <div
          className="flex flex-col items-start md:items-center mt-8 md:mt-0"
          style={{ flexBasis: "50%" }}
        >
          <ul className="text-white-secondary font-openSans font-bold space-y-5 md:text-2xl text-lg">
            <li>
            <div className="flex flex-col space-y-8">
            <h1 className="font-medium text-4xl md:text-3xl">
            Intereses Personales:
            </h1>
            <p className="text-white-secondary text-1xl md:text-1xl">
            Además de mi pasión por el diseño web, me gusta disfrutar de la música, el cine y la danza. Creo que estos intereses me ayudan a mantener un equilibrio en mi vida y me permiten ser más creativo y relajado en mi trabajo.</p>

            <p className="text-white-secondary text-1xl md:text-1xl">
            En mi tiempo libre, disfruto de asistir a conciertos y festivales de música obvio al gratin jaja, así como también de ver películas en el cine y descargar nuevas pelis y compartir con mi familia. Estos intereses me han permitido desarrollar habilidades de socialización y trabajo en equipo, lo cual considero fundamental en cualquier entorno laboral..</p>
          </div>
            </li>
            <li>
              <a
                href="#"
                className="flex space-x-5 items-center hover:text-slate-300"
              >
                <FaGithub size={30} color="#3b82f6" />
                <p>Github</p>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex space-x-5 items-center hover:text-slate-300"
              >
                <HiMail size={30} color="#3b82E1" />
                <p>arandom48@gmail.com</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
