import { NextPage } from "next";
import Image from 'next/image'
import php from '../../../public/php.png'
import java from '../../../public/java.png'
import laravel from '../../../public/laravel.png'
import python from '../../../public/python.png'
import html from '../../../public/html.png'
import git from '../../../public/git.png'
import docker from '../../../public/docker.png'
import sql from '../../../public/sql.png'
import marathon from '../../../public/marathon.png'
import pokemon from '../../../public/pokemon.svg'
import todolist from '../../../public/todolist.png'

const CompetencesIndex:NextPage = () => {
    return (
        <>
        <h1 className="text-center mt-16 text-red-400 text-6xl">Mon CV informatique !</h1>
<div className="flex justify-center items-center sm:-mt-0 h-full lg:h-screen overflow-auto flex-wrap">
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4">

    
        <div className="bg-blue-600 pt-1 px-2 bg-gradient-to-b from-indigo-400 to-indigo-500 rounded-xl shadow-lg w-52 pb-4">
            <div className="p-4 flex justify-center">
                <div className="flex justify-center bg-white rounded-full shadow-xl w-32" style={{position: 'relative'}} >
                <Image
                    alt="laravel"
                    src={laravel}
                    
                />
                </div>
            </div>
            <div className="p-0">
                <p className="text-white font-semibold text-center" >Symfony</p>
            </div>
        </div>

        <div className="bg-blue-600 pt-1 px-2 bg-gradient-to-b from-indigo-400 to-indigo-500 rounded-xl shadow-lg w-52 pb-4">
            <div className="p-4 flex justify-center">
                <div className="flex justify-center bg-white rounded-full shadow-xl w-32" style={{position: 'relative'}} >
                <Image
                    alt="laravel"
                    src={laravel}
                    
                />
                </div>
            </div>
            <div className="p-0">
                <p className="text-white font-semibold text-center" >Laravel</p>

            </div>
        </div>

        <div className="bg-blue-600 pt-1 px-2 bg-gradient-to-b from-indigo-400 to-indigo-500 rounded-xl shadow-lg w-52 pb-4">
            <div className="p-4 flex justify-center">
                <div className="flex justify-center bg-white rounded-full shadow-xl w-32" style={{position: 'relative'}} >
                <Image
                    alt="java"
                    src={java}
                    
                />
                </div>
            </div>
            <div className="p-0">
                <p className="text-white font-semibold text-center" >Java</p>

            </div>
        </div>

        <div className="bg-blue-600 pt-1 px-2 bg-gradient-to-b from-indigo-400 to-indigo-500 rounded-xl shadow-lg w-52 pb-4">
            <div className="p-4 flex justify-center">
                <div className="flex justify-center bg-white rounded-full shadow-xl w-32" style={{position: 'relative'}} >
                <Image
                    alt="python"
                    src={python}
                    
                />
                </div>
            </div>
            <div className="p-0">
                <p className="text-white font-semibold text-center" >Python</p>
            </div>
        </div>

        <div className="bg-blue-600 pt-1 px-2 bg-gradient-to-b from-indigo-400 to-indigo-500 rounded-xl shadow-lg w-52 pb-4">
            <div className="p-4 flex justify-center">
                <div className="flex justify-center bg-white rounded-full shadow-xl w-32" style={{position: 'relative'}} >
                <Image
                    alt="html"
                    src={html}
                    
                />
                </div>
            </div>
            <div className="p-0">
                <p className="text-white font-semibold text-center" >HTML/CSS</p>   
            </div>
        </div>

        <div className="bg-blue-600 pt-1 px-2 bg-gradient-to-b from-indigo-400 to-indigo-500 rounded-xl shadow-lg w-52 pb-4">
            <div className="p-4 flex justify-center">
                <div className="flex justify-center bg-white rounded-full shadow-xl w-32" style={{position: 'relative'}} >
                <Image
                    alt="docker"
                    src={docker}
                    
                />
                </div>
            </div>
            <div className="p-0">
                <p className="text-white font-semibold text-center" >Docker</p>   
            </div>
        </div>

        <div className="bg-blue-600 pt-1 px-2 bg-gradient-to-b from-indigo-400 to-indigo-500 rounded-xl shadow-lg w-52 pb-4">
            <div className="p-4 flex justify-center">
                <div className="flex justify-center bg-white rounded-full shadow-xl w-32" style={{position: 'relative'}} >
                <Image
                    alt="git"
                    src={git}
                    
                />
                </div>
            </div>
            <div className="p-0">
                <p className="text-white font-semibold text-center" >Git</p>   
            </div>
        </div>

        <div className="bg-blue-600 pt-1 px-2 bg-gradient-to-b from-indigo-400 to-indigo-500 rounded-xl shadow-lg w-52 pb-4">
            <div className="p-4 flex justify-center">
                <div className="flex justify-center bg-white rounded-full shadow-xl w-32" style={{position: 'relative'}} >
                <Image
                    alt="sql"
                    src={sql}
                    
                />
                </div>
            </div>
            <div className="p-0">
                <p className="text-white font-semibold text-center" >SQL</p>   
            </div>
        </div>

    </div>  
</div>

<h1 className="text-center text-red-400 text-6xl">Projets</h1>
<div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">

    <div className="rounded overflow-hidden shadow-lg">
                <Image
                    alt="pokemon"
                    src={pokemon}
                    
                />
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Projet Pokémon</div>
            <p className="text-gray-700 text-base">
            Pour mon projet de cours, j'ai développé une application web en utilisant le framework Laravel. Cette application permet aux utilisateurs de consulter une liste de pokemons et de voir leurs caractéristiques. J'ai utilisé le package breeze pour gérer les aspects de l'interface utilisateur, ce qui a rendu le développement de l'application plus rapide et plus facile. En plus de cela, j'ai mis en place plusieurs mesures de sécurité pour protéger l'application contre les attaques potentielles. Je suis fier du résultat final et j'ai appris énormément sur le développement web en réalisant ce projet.
            </p>
        </div>
        <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#web</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#laravel</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#php</span>
        </div>
    </div>

    <div className="rounded overflow-hidden shadow-lg">
                <Image
                    alt="marathon"
                    src={marathon}
                    
                />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Projet Marathon Web</div>
        <p className="text-gray-700 text-base">
          Notre projet de groupe est une application web de visite de musée développée en Laravel pour la partie back-end et en CSS pour la partie front-end. L'équipe informatique s'est occupée de la partie back-end en utilisant le framework Laravel, tandis que l'équipe design s'est occupée de la partie front-end en utilisant le CSS. L'application représente les différentes salles du musée et inclut une liste d'oeuvres d'art dans chaque salle. Elle offre également la possibilité de voir le détail d'une oeuvre en particulier, avec des informations sur l'artiste, la date de création et la technique utilisée. Nous avons eu un peu moins de 40 heures pour ce projet Marathon !
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#laravel</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#sae</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#git</span>
      </div>
    </div>

    <div className="rounded overflow-hidden shadow-lg">
                <Image
                    alt="todolist"
                    src={todolist}
                    
                />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">To do list</div>
        <p className="text-gray-700 text-base">
        Ce projet en entreprise a impliqué le développement d'une application de gestion de tâches utilisant les technologies PHP, HTML, SCSS et Docker. L'application permet aux utilisateurs de créer, modifier et supprimer des tâches via une interface conviviale. Grâce à l'intégration de Docker, le déploiement et la gestion de l'application ont été simplifiés, assurant une mise en production efficace.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#symfony</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#alternance</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#git</span>
      </div>
    </div>

</div>
        </>
    )
}

export default CompetencesIndex