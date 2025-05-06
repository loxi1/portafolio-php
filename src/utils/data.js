export const headerData = {
    links:
        [
            {
                text: 'Inicio',
                href: '/',
            },
            {
                text: 'Acerca de mi',
                href: '/acercademi',
            },
            {
                text: 'Proyectos',
                href: '/proyectos',
            },
            {
                text: 'Contáctanos',
                href: '/contactanos',
            },
        ]
};

export const footerMenu = {
    menusinferiores: [
        { title: 'Inicio', href: '/' },
        { title: 'Acerca de mi', href: '/acercademi' },
        { title: 'Proyectos', href: '/proyectos' },
        { title: 'Contáctanos', href: '/contactanos' },
    ]
}

export const portafolio = {
    proyectos: [
        {
            title: 'GoTeacherperu',
            description: 'Cases en la modalidad virtural o presencial para escolares y universitrios.',
            dia: '',
            anio: '2025',
            mes: 'Marzo',
            git: 'https://github.com/loxi1/astro-goteacher',
            tipo: "front",
            image: 'go-teacher-peru.png',
            "skills": [
                {
                    "name": "Astro",
                    "imagen": "astro"
                },
                {
                    "name": "Ghithub",
                    "imagen": "github"
                },
                {
                    "name": "Tailwind",
                    "imagen": "tailwind"
                },
                {
                    "name": "Javascript",
                    "imagen": "javascript"
                },
                {
                    "name": "Typescript",
                    "imagen": "ts"
                },
                {
                    "name": "Cloudflare",
                    "imagen": "cloudflare"
                }
            ],
            url: 'https://www.goteacherperu.com/'
        },
        {
            title: 'Control de despacho',
            description: 'Aplicación de control de despacho, lectura chip RFID.',
            dia: '',
            anio: '2024',
            mes: 'Enero',
            git: '',
            tipo: "back",
            image: 'control-despacho.png',
            "skills": [
                {
                    "name": "C#",
                    "imagen": "csharp"
                },
                {
                    "name": ".Net",
                    "imagen": ".net"
                },
                {
                    "name": "Mysql",
                    "imagen": "mysql"
                }
            ],
            url: ''
        },
        {
            title: 'Vinculador de prendas',
            description: 'Aplicación para vincular los chip RFID con el codigo de barras.',
            dia: '',
            anio: '2025',
            mes: 'Enero',
            git: 'https://github.com/loxi1/Lector_mesa',
            tipo: "back",
            image: 'vincular-prenda.PNG',
            "skills": [
                {
                    "name": ".Net Fremework",
                    "imagen": "net"
                },
                {
                    "name": "Mysql",
                    "imagen": "mysql"
                },
                {
                    "name": "Sybase",
                    "imagen": "sybase"
                }
            ],
            url: ''
        },
        {
            title: 'Control de despacho',
            description: 'Aplicación de control de despacho, lectura chip RFID.',
            dia: '',
            anio: '2024',
            mes: 'Enero',
            git: 'https://github.com/loxi1/cs-RFID',
            tipo: "back",
            image: 'control-despacho.png',
            "skills": [
                {
                    "name": "C#",
                    "imagen": "csharp"
                },
                {
                    "name": "Mysql",
                    "imagen": "mysql"
                },
                {
                    "name": "Sybase",
                    "imagen": "sybase"
                }
            ],
            url: ''
        },
        { 
            title: 'GOerp', 
            description: 'ERP para gestionar los procesos de Gios restaurante.', 
            dia: '',
            anio: '2023',
            mes: 'Enero',
            git: 'https://github.com/mesquen/GOerp',
            tipo: "back",
            image: 'gios-restaurante.png', 
            "skills": [
                {
                    "name": "PHP",
                    "imagen": "php"
                },
                {
                    "name": "codeigniter",
                    "imagen": "codeigniter"
                },
                {
                    "name": "Mysql",
                    "imagen": "mysql"
                },
                {
                    "name": "Javascript",
                    "imagen": "javascript"
                },
                {
                    "name": "Jquery",
                    "imagen": "jquery"

                },
                {
                    "name": "Boostrap",
                    "imagen": "boostrap"
                }
            ],
            url: 'https://goerp.pe/web' 
        },{ 
            title: 'Buenos amigos FC', 
            description: 'Sistema para gestionar las pichangas deportivas de barrio.', 
            dia: '',
            anio: '2022',
            mes: 'Abril',
            git: 'https://github.com/loxi1/sistema-buenos-amigos-fc',
            tipo: "back",
            image: 'sistema-buenos-amigos-fc.png', 
            "skills": [
                {
                    "name": "PHP",
                    "imagen": "php"
                },
                {
                    "name": "Laravel",
                    "imagen": "laravel"
                },
                {
                    "name": "Mysql",
                    "imagen": "mysql"
                },
                {
                    "name": "Javascript",
                    "imagen": "javascript"
                },
                {
                    "name": "Jquery",
                    "imagen": "jquery"

                },
                {
                    "name": "Boostrap",
                    "imagen": "boostrap"
                }
            ],
            url: '' 
        },{ 
            title: 'Prácticas prefesionales', 
            description: 'Gestionar Prácticas prefesionales consiste en ralizar el seguimiento por parte del TUTOR GUIA y evlaución de parte del DOCENTE de la IE que realiza las prácticas ALUMNO.', 
            dia: '',
            anio: '2023',
            mes: 'Febrero',
            git: 'https://github.com/loxi1/sist-practicas-prof',
            tipo: "back",
            image: 'sist-practicas-prof.png', 
            "skills": [
                {
                    "name": "PHP",
                    "imagen": "php"
                },
                {
                    "name": "Laravel",
                    "imagen": "laravel"
                },
                {
                    "name": "Mysql",
                    "imagen": "mysql"
                },
                {
                    "name": "Javascript",
                    "imagen": "javascript"
                },
                {
                    "name": "Jquery",
                    "imagen": "jquery"

                },
                {
                    "name": "Boostrap",
                    "imagen": "boostrap"
                }
            ],
            url: '' 
        },{ 
            title: 'Accesibilidad de establecimiento', 
            description: 'Averiguar si un lugar es ascequible para discapacitados, se hace consultas al api de google y se registra valoración y comentario en caso este logueado el usuario.', 
            dia: '',
            anio: '2023',
            mes: 'Julio',
            git: 'https://github.com/lemcok/equipo4-ed4-backend',
            tipo: "back",
            image: 'accesibilidad-de-lugar.png', 
            "skills": [
                {
                    "name": "Node",
                    "imagen": "nodejs"
                },
                {
                    "name": "Prisma.io",
                    "imagen": "prisma"
                },
                {
                    "name": "Postgresql",
                    "imagen": "postgresql"
                },
                {
                    "name": "Fastify",
                    "imagen": "fastify"
                },
                {
                    "name": "JWT",
                    "imagen": "jwt"

                },
                {
                    "name": "Fastify",
                    "imagen": "fastify"
                },
                {
                    "name": "Docker",
                    "imagen": "docker"
                }
            ],
            url: '' 
        },
        {
            title: 'Practica Node (Biblioteca)',
            description: 'CURD de curso y usuario, relizado con prisma',
            dia: '',
            anio: '2023',
            mes: 'Febrero',
            git: 'https://github.com/loxi1/node-prisma',
            image: 'prueba-express.png',
            tipo: "back",
            "skills" : [
                {
                    "name": "Node",
                    "imagen": "nodejs"
                },
                {
                    "name": "Typescript",
                    "imagen": "ts"
                },
                {
                    "name": "Typescript",
                    "imagen": "ts"
                },
                {
                    "name": "Postgresql",
                    "imagen": "postgresql"
                },
                {
                    "name": "Prisma",
                    "imagen": "prisma"

                },
                {
                    "name": "Swagger",
                    "imagen": "swagger"

                }
            ]
        }   ,
        {
            title: 'Practica Node (Login)',
            description: 'CURD de usuario, rol y categoria, usando prisma, exprees y login',
            dia: '',
            anio: '2023',
            mes: 'Agosto',
            git: 'https://github.com/loxi1/jlc-inventario',
            image: 'jlc-inventario.png',
            tipo: "back",
            "skills" : [
                {
                    "name": "Node",
                    "imagen": "nodejs"
                },
                {
                    "name": "Express",
                    "imagen": "express"

                },
                {
                    "name": "Javascript",
                    "imagen": "javascript"
                },
                {
                    "name": "MySQL",
                    "imagen": "mysql"

                },
                {
                    "name": "JWT",
                    "imagen": "jwt"

                }
            ]
        },
        { 
            title: 'jlcelectricistas', 
            description: 'Grupo de ingenieros electricos que brindan servicios de: diseño de proyectos eléctricos en media y baja tensión, ingeniería de detalles, Memorias Descriptivas, Memorias de Cálculos, Especificaciones Técnicas y planos eléctricos en general', dia: '', anio: '2023', mes: 'Marzo', 
            dia: '', 
            anio: '2023', 
            mes: 'Mayo', 
            git: 'https://github.com/loxi1/jlc-consultora-proyectos', 
            image: 'jlc-electricistas.png', 
            tipo: "front",
            "skills": [
                {
                    "name": "Astro",
                    "imagen": "astro"
                },
                {
                    "name": "SendGrid",
                    "imagen": "sendgrid"
                },
                {
                    "name": "Tailwind",
                    "imagen": "tailwind"
                },
            ],
            url: 'https://jlc-consultora-proyectos.pages.dev/'
        },
        { 
            title: 'Confecciones adler', 
            description: 'Emprendimiento del rubro textil dedicada al corte, confección y bordados.', 
            dia: '', 
            anio: '2023', 
            mes: 'Febreo', 
            git: 'https://github.com/loxi1/Adler', 
            image: 'confeciones-adler.png',
            tipo: "front",
            "skills": [
                {
                    "name": "Astro",
                    "imagen": "astro"
                },
                {
                    "name": "SendGrid",
                    "imagen": "sendgrid"
                },
                {
                    "name": "Tailwind",
                    "imagen": "tailwind"
                },
            ],
            url: 'https://confeccionesadler.com/'
        }        
    ]
}

export const skills = {
    habilidades: [
        "php", "codeigniter", "nodejs","prisma", "fastify", "express", "mysql", "postgresql"
    ]
}

export const work = {
    experiencia: [
        {
            periodo: "2024 Agosto - Actualidad",
            empresa: "COFACO Industries S. A. C.",
            puesto: "ANALISTA PROGRAMADOR DE SISTEMAS WEB",
            descripcion: "TAI LOY S.A., es la primera cadena de Stationery en el Perú. Somos los especialistas y líderes del sector de útiles escolares y de oficina a nivel nacional.",
            funciones: [
                {
                    detalle: "Crear App android para el control despacho, lectura chip RFID.",
                },
                {
                    detalle: "Crear Aplicacion escritorio en C# para el control despacho, lectura chip RFID.",
                },
                {
                    detalle: "Crear Aplicacion escritorio en .Net para el control despacho, lectura chip RFID.",
                },
                {
                    detalle: "Desplegar aplicaciones en servidores locales usando ubuntu, nginx y apache.",
                }
            ],
            habilidades: "PHP, .Net, Csharp, Android, Mysql, SyBase, NGINX, Apache, Github, Docker y Linux"
        },
        {
            periodo: "2023 Diciembre - 2024 Julio",
            empresa: "TAI LOY S.A.",
            puesto: "ANALISTA DE SISTEMAS WEB",
            descripcion: "TAI LOY S.A., es la primera cadena de Stationery en el Perú. Somos los especialistas y líderes del sector de útiles escolares y de oficina a nivel nacional.",
            funciones: [
                {
                    detalle: "Encargado de dar soporte al sistema comercial suplacorp.",
                },
                {
                    detalle: "Encargado de dar soporte al sistema coorporativo tailoy.",
                },
                {
                    detalle: "Dar soporte y mantenimiento al aplicativo Android de inventario, apis REST creadas en PHP.",
                },
                {
                    detalle: "Desarrollo de aplicación de agendamiento de flotas, apis REST para ser consumidas por SAP y PHP",
                }
            ],
            habilidades: "PHP, Python(Django), .Net, Csharp, Android, SQLServer, Mysql, postgreSQL NGINX, Apache, GitLab y Linux"
        },
        {
            periodo: "2023 Agosto - Setiembre",
            empresa: "Gio’s Restaurante",
            puesto: "PROGRAMADOR WEB",
            descripcion: "Gio's Restaurante, empresa dedicada al rubro de gastronomía, cuenta con un ERP hecho con Codeigniter, este sistema administa dos sedes: el almacen y el restaurante.",
            funciones: [
                {
                    detalle: "Creación de reportes para el área de Producción.",
                },
                {
                    detalle: "Refactorización de código.",
                },
                {
                    detalle: "Encargado de gestionar la Base de datos MariaDB  en AWS.",
                },
                {
                    detalle: "Mantenimiento a los reportes y mejorar los tiempo de respuesta de las consultas usando store   procedure  y   triggers.",
                }
            ],
            habilidades: "PHP, Codeigniter, Bootstrap, MySQL y AWS"
        },
        {
            periodo: "2023 - Mayo - Junio",
            empresa: "Devathon (Concurso de programación)",
            puesto: "PROGRAMADOR",
            descripcion: "",
            funciones: [
                {
                    detalle: "El proyecto es una plataforma web de accesibilidad, tiene por finalidad permitir a las personas con habilidades reducidas obtener información sobre la accesibilidad de los espacios públicos y privados con respecto a su ubicación actual. Se usó API de terceros para recopilar datos de geolocalización con la finalidad, de obtener el detalle accesibilidad de diferentes lugares. Mi aporte fue realizar EndPoind.",
                }
            ],
            habilidades: "Node.JS, prima, Docker, Fastify, PostgreSQL, GIT, LINUX, JSON Web Tokens, CloudServer"
        },
        {
            periodo: "2023 - Mayo - Junio",
            empresa: "Devathon (Concurso de programación)",
            puesto: "PROGRAMADOR",
            descripcion: "",
            funciones: [
                {
                    detalle: "El proyecto es una plataforma web de accesibilidad, tiene por finalidad permitir a las personas con habilidades reducidas obtener información sobre la accesibilidad de los espacios públicos y privados con respecto a su ubicación actual. Se usó API de terceros para recopilar datos de geolocalización con la finalidad, de obtener el detalle accesibilidad de diferentes lugares. Mi aporte fue realizar EndPoind.",
                }
            ],
            habilidades: "Node.JS, prima, Docker, Fastify, PostgreSQL, GIT, LINUX, JSON Web Tokens"
        },
        {
            periodo: "2023 - Abril - Mayo",
            empresa: "Try Catch.tv (Concurso de programación)",
            puesto: "PROGRAMADOR",
            descripcion: "",
            funciones: [
                {
                    detalle: "Este proyecto me permitió ampliar mis conocimientos como Desarrollador Front con tecnologías como Next.JS, Tailwind, GIT con consumo de api.",
                }
            ],
            habilidades: "NextJS, Tailwind, GIT"
        },
        {
            periodo: "2023 - Enero - Marzo",
            empresa: "Freelance",
            puesto: "PROGRAMADOR WEB",
            descripcion: "",
            funciones: [
                {
                    detalle: "Creación de páginas web estáticas para JLC Electricistas y Confecciones Adler.",
                }
            ],
            habilidades: "Javascript, TypeScript, HTML, CSS, Tailwind, Astro.build, CloudFlare, Figma, GIT"
        },
        {
            periodo: "2023 - Mayo - Junio",
            empresa: "Devathon (Concurso de programación)",
            puesto: "PROGRAMADOR",
            descripcion: "",
            funciones: [
                {
                    detalle: "El proyecto es una plataforma web de accesibilidad, tiene por finalidad permitir a las personas con habilidades reducidas obtener información sobre la accesibilidad de los espacios públicos y privados con respecto a su ubicación actual. Se usó API de terceros para recopilar datos de geolocalización con la finalidad, de obtener el detalle accesibilidad de diferentes lugares. Mi aporte fue realizar EndPoind.",
                }
            ]
        },
        {
            periodo: "2023 - Mayo - Junio",
            empresa: "Devathon (Concurso de programación)",
            puesto: "PROGRAMADOR",
            descripcion: "",
            funciones: [
                {
                    detalle: "El proyecto es una plataforma web de accesibilidad, tiene por finalidad permitir a las personas con habilidades reducidas obtener información sobre la accesibilidad de los espacios públicos y privados con respecto a su ubicación actual. Se usó API de terceros para recopilar datos de geolocalización con la finalidad, de obtener el detalle accesibilidad de diferentes lugares. Mi aporte fue realizar EndPoind.",
                }
            ]
        },
        {
            periodo: "2023 - Mayo - Junio",
            empresa: "Devathon (Concurso de programación)",
            puesto: "PROGRAMADOR",
            descripcion: "",
            funciones: [
                {
                    detalle: "El proyecto es una plataforma web de accesibilidad, tiene por finalidad permitir a las personas con habilidades reducidas obtener información sobre la accesibilidad de los espacios públicos y privados con respecto a su ubicación actual. Se usó API de terceros para recopilar datos de geolocalización con la finalidad, de obtener el detalle accesibilidad de diferentes lugares. Mi aporte fue realizar EndPoind.",
                }
            ]
        },
        {
            periodo: "2023 - Mayo - Junio",
            empresa: "Devathon (Concurso de programación)",
            puesto: "PROGRAMADOR",
            descripcion: "",
            funciones: [
                {
                    detalle: "El proyecto es una plataforma web de accesibilidad, tiene por finalidad permitir a las personas con habilidades reducidas obtener información sobre la accesibilidad de los espacios públicos y privados con respecto a su ubicación actual. Se usó API de terceros para recopilar datos de geolocalización con la finalidad, de obtener el detalle accesibilidad de diferentes lugares. Mi aporte fue realizar EndPoind.",
                }
            ]
        },
        {
            periodo: "2023 - Mayo - Junio",
            empresa: "Devathon (Concurso de programación)",
            puesto: "PROGRAMADOR",
            descripcion: "",
            funciones: [
                {
                    detalle: "El proyecto es una plataforma web de accesibilidad, tiene por finalidad permitir a las personas con habilidades reducidas obtener información sobre la accesibilidad de los espacios públicos y privados con respecto a su ubicación actual. Se usó API de terceros para recopilar datos de geolocalización con la finalidad, de obtener el detalle accesibilidad de diferentes lugares. Mi aporte fue realizar EndPoind.",
                }
            ]
        }
    ]
}
