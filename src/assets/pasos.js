exports.pasos =   [
  {
    "index":1,
    "pregunta":"Indique el firmware o sistema operativo que utiliza su dispositivo",
    "respuesta":"",
    "opciones":[],
    "tipo":"Libre",
    "fase":"General",
    "foto":"https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Teaser/operating-system-t.jpg",
    "categoria":[]
  },
  {
    "index":2,
    "pregunta":"¿Está actualizado?",
    "respuesta":"",
    "opciones":["Sí","No"],
    "tipo":"Opciones",
    "fase":"General",
    "foto":"https://www.lisot.com/wp-content/uploads/2019/11/actualizaciones-sistema-operativo-importancia.png",
    "categoria":[]
  },
  {
    "index":3,
    "pregunta":"¿Qué protocolos de comunicación utiliza el dispositivo?",
    "respuesta":[],
    "opciones":["WiFi","BLE","6LoWPAN","ZigBee","RFID","NFC","Z-Wave","Otros"],
    "tipo":"Check",
    "fase":"General",
    "foto":"https://smarthomefort.com/wp-content/uploads/2019/10/smart-home-protocols.jpg",
    "categoria":[]
  },
  {
    "index":4,
    "pregunta":"¿Qué protocolo de transporte y red utiliza?",
    "respuesta":"",
    "opciones":["TCP/IP","UDP/IP"],
    "tipo":"Opciones",
    "fase":"General",
    "foto":"https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Teaser/tcp-ip-t.jpg",
    "categoria":[]
  },
  {
    "index":5,
    "pregunta":"¿Qué protocolos de seguridad llevan asociados a estos protocolos de red y transporte?",
    "respuesta":[],
    "opciones":["TLS","SSL","IPSEC","Ninguno"],
    "tipo":"Opciones",
    "fase":"General",
    "foto":"https://latam.kaspersky.com/content/es-mx/images/repository/isc/2020/cyber-security-article.jpg",
    "categoria":[]
  },
  {
    "index":6,
    "pregunta":"¿El dispositivo se encuentra directamente conectado al router de la red o se conecta indirectamente a esta?",
    "respuesta":"",
    "opciones":["Directamente","Indirectamente"],
    "tipo":"Opciones",
    "fase":"General",
    "foto":"https://xpertbiz.com/assets/images/Networking.jpg",
    "categoria":[]
  },
  {
    "index":7,
    "pregunta":"Indique la categoría del dispositivo",
    "respuesta":"",
    "opciones":["Gestión de recursos de energía","Entretenimiento","Salud y bienestar","Utilidad para la red","Interfaz máquina humano","Ayuda para los cuidados de la casa","Seguridad","Sensores"],
    "tipo":"Opciones",
    "fase":"General",
    "foto":"http://diansa.com/blog/wp-content/uploads/2017/11/smart-homes-casas-inteligentes.png",
    "categoria":[]
  },
  {
    "index":8,
    "pregunta":"¿Está conectado a una nube?",
    "respuesta":"",
    "opciones":["Sí","No"],
    "tipo":"Opciones",
    "fase":"Especifica",
    "foto":"https://www.deustoformacion.com/sites/deustoformacion/files/imagenes_blog_1/tic/2014/07/iStock_000024868898_Medium.jpg",
    "categoria":["Gestión de recursos de energía","Entretenimiento","Salud y bienestar","Utilidad para la red","Interfaz máquina humano","Ayuda para los cuidados de la casa","Seguridad","Sensores"]
  },
    {
    "index":9,
    "pregunta":"¿Envía datos a la nube?",
    "respuesta":"",
    "opciones":["Sí","No"],
    "tipo":"Opciones",
    "fase":"Especifica",
    "foto":"https://blog.dataprius.com/wp-content/uploads/2019/08/donde-se-guardan-datos-nube-1.jpg",
    "categoria":["Gestión de recursos de energía","Entretenimiento","Salud y bienestar","Utilidad para la red","Interfaz máquina humano","Ayuda para los cuidados de la casa","Seguridad","Sensores"]
  },
    {
    "index":10,
    "pregunta":"Indique las entradas físicas que tiene su dispositivo",
    "respuesta":[],
    "opciones":["USB","Ethernet","Corriente","Otras","No tiene"],
    "tipo":"Check",
    "fase":"Especifica",
    "foto":"https://as.com/betech/imagenes/2017/12/04/portada/1512388558_229532_1512388667_noticia_normal.jpg",
    "categoria":["Entretenimiento","Utilidad para la red","Seguridad"]
  },
  /*{
    "index":11,
    "pregunta":"¿Qué protocolos de comunicación por cable llevan asociadas esas entradas?",
    "respuesta":"",
    "opciones":[],
    "tipo":"Libre",
    "fase":"Especifica",
    "foto":"https://www.metalindustria.com/media/uploads/noticias/wwethernet.jpg",
    "categoria":["Gestión de recursos de energía","Entretenimiento","Utilidad para la red","Seguridad"]
  },*/
    {
    "index":11,
    "pregunta":"¿Cuenta con algún tipo de sensor?",
    "respuesta":"",
    "opciones":["Sí","No"],
    "tipo":"Opciones",
    "fase":"Especifica",
    "foto":"https://sensores.top/wp-content/uploads/2019/10/sensores-min.png",
    "categoria":["Gestión de recursos de energía","Salud y bienestar","Utilidad para la red","Interfaz máquina humano","Seguridad","Sensores"]
  },
    {
    "index":12,
    "pregunta":"¿Cuenta con algún micrófono que le permita recibir órdenes por voz o con una cámara?",
    "respuesta":[],
    "opciones":["Micrófono","Cámara","Otros"],
    "tipo":"Check",
    "fase":"Especifica",
    "foto":"https://s27389.pcdn.co/wp-content/uploads/2019/10/AdobeStock_283199860-1024x440.jpeg",
    "categoria":["Gestión de recursos de energía","Salud y bienestar","Utilidad para la red","Interfaz máquina humano","Seguridad","Sensores"]
  },
    {
    "index":13,
    "pregunta":"¿Cuenta con actuadores?",
    "respuesta":"",
    "opciones":["Sí","No"],
    "tipo":"Opciones",
    "fase":"Especifica",
    "foto":"https://www.researchgate.net/profile/Digbijay-Guha/publication/330044814/figure/fig2/AS:710308775620609@1546362217473/IOT-SENSORS-ACTUATORS.jpg",
    "categoria":["Gestión de recursos de energía","Entretenimiento","Utilidad para la red","Interfaz máquina humano","Ayuda para los cuidados de la casa","Seguridad"]
  },
    {
    "index":14,
    "pregunta":"¿Tiene algún botón físico? ¿Qué utilidad tiene?",
    "respuesta":"",
    "opciones":[],
    "tipo":"Libre",
    "fase":"Especifica",
    "foto":"https://www.bbvaopenmind.com/wp-content/uploads/2019/12/BBVA-OpenMind-Ahmed-Banafa-Ten-Trends-of-IoT-in-2020-Alexa.jpg",
    "categoria":["Gestión de recursos de energía","Entretenimiento","Salud y bienestar","Utilidad para la red","Interfaz máquina humano","Ayuda para los cuidados de la casa","Seguridad","Sensores"]
  },
  {
    "index":15,
    "pregunta":"¿Se puede acceder remotamente al dispositivo a través de una aplicación?",
    "respuesta":"",
    "opciones":["Sí","No"],
    "tipo":"Opciones",
    "fase":"Especifica",
    "foto":"https://www.acens.com/comunicacion/wp-content/images/2015/12/conexion-escritorio-remoto-white-paper-acens-12.jpg",
    "categoria":["Gestión de recursos de energía","Salud y bienestar","Utilidad para la red","Interfaz máquina humano","Ayuda para los cuidados de la casa","Seguridad","Sensores"]
  },
  {
    "index":16,
    "pregunta":"¿Cuenta con factor de doble autenticación?",
    "respuesta":"",
    "opciones":["Sí","No"],
    "tipo":"Opciones",
    "fase":"Especifica",
    "foto":"https://news.sophos.com/wp-content/uploads/2017/06/shutterstock_6419607371.jpg?w=640",
    "categoria":["Gestión de recursos de energía","Salud y bienestar","Utilidad para la red","Interfaz máquina humano","Ayuda para los cuidados de la casa","Seguridad","Sensores"]
  },
  {
    "index":17,
    "pregunta":"¿Está basada en open source?",
    "respuesta":"",
    "opciones":["Sí","No"],
    "tipo":"Opciones",
    "fase":"Especifica",
    "foto":"https://www.muycomputerpro.com/wp-content/uploads/2020/09/open_source-1000x600.jpg",
    "categoria":["Gestión de recursos de energía","Salud y bienestar","Utilidad para la red","Interfaz máquina humano","Ayuda para los cuidados de la casa","Seguridad","Sensores"]
  },
  {
    "index":18,
    "pregunta":"¿Es accesible desde la web?",
    "respuesta":"",
    "opciones":["Sí, y utiliza HTTPS","Sí, pero no utiliza HTTPS","No"],
    "tipo":"Opciones",
    "fase":"Especifica",
    "foto":"https://www.comparahosting.com/wp-content/uploads/2020/06/21995154_m2.jpg",
    "categoria":["Gestión de recursos de energía","Salud y bienestar","Utilidad para la red","Interfaz máquina humano","Seguridad","Sensores"]
  }
]