import { Link } from 'react-router-dom'
import './Registro.css'
function Registro(){
    return(
        <div className='registro-container'>
<form>
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
        <div class="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <p class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Crear cuenta
            
            
              </p><div>
                <label class="block mb-2 text-sm font-medium text-gray-900">
                  Nombre de usuario
                </label>
                <input placeholder="JohnDoe" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" id="username" type="text"/>
import './Registro.css'
import { Link } from 'react-router-dom';
function Registro() {
  return (
    <div className='registro-container'>
      <form className='w-100'>
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
          <div class="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <p class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Create una cuenta
              </p>
              <div>
                <label class="block mb-2 text-sm font-medium text-gray-900">
                  Nombre
                </label>
                <input
                  placeholder="JohnDoe"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  id="username"
                  type="text"
                />
              </div>
              <div>
                <label class="block mb-2 text-sm font-medium text-gray-900">
                  Contraseña
                </label>
                <input class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" placeholder="••••••••" id="password" type="password"/>
              </div>
              <div>
                <label class="block mb-2 text-sm font-medium text-gray-900">
                  Confirmar contraseña
                </label>
                <input class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" placeholder="••••••••" id="confirmPassword" type="password"/>
              </div>
                <div>
                <label class="block mb-2 text-sm font-medium text-gray-900">
                  Correo electrónico
                </label>
                <input class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" placeholder="example@domain.com" id="email" type="email"/>
              </div>
              <button class="w-full bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  focus:ring-blue-800 text-white" type="submit">
                Crear cuenta
              </button>
            <Link to="/login">
              ¿Ya tienes cuenta? Inicia sesión
            </Link>
          </div>
        </div>
      </div></form>
    
        </div>
    )
}

                <input
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  placeholder="••••••••"
                  id="password"
                  type="password"
                />
              </div>
              <div>
                <label class="block mb-2 text-sm font-medium text-gray-900">
                  Confirmar Contarseña
                </label>
                <input
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  placeholder="••••••••"
                  id="confirmPassword"
                  type="password"
                />
              </div>
                          <div>
                <label class="block mb-2 text-sm font-medium text-gray-900">
                  Correo electrónico
                </label>
                <input
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  placeholder="Correo"
                  id="confirmPassword"
                  type="email"
                />
              </div>

              <button
                class="w-full bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  focus:ring-blue-800 text-white"
                type="submit"
              >
                Registrarse
              </button>
              <Link to="/login">¿Ya tiene una cuenta?. Inicie sesión</Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}


export default Registro