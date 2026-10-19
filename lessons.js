/* Contenido de "Inglés Básico A1".
   items:   [inglés, pronunciación, español]
   dialogs: [{ title, lines: [[inglés, español], ...] }] */
window.APP = {
  id: 'ingles-basico-a1',
  name: 'Inglés Básico A1',
  langName: 'inglés',
  speechLang: 'en-US',
  voicePrefix: 'en',
  contractions: true,
  LESSONS: [
    {
      title: 'Saludos y presentaciones',
      intro: 'Tus primeras palabras: saludar, despedirte y decir cómo te llamas.',
      items: [
        ['Hello', 'jeló', 'Hola'],
        ['Good morning', 'gud mórning', 'Buenos días'],
        ['Good afternoon', 'gud afternún', 'Buenas tardes'],
        ['Good night', 'gud náit', 'Buenas noches'],
        ['Goodbye', 'gudbái', 'Adiós'],
        ['My name is Fer.', 'mái néim is Fer', 'Me llamo Fer.'],
        ['Nice to meet you.', 'náis tu mít iu', 'Encantado de conocerte.']
      ],
      tips: [
        '<b>Consejo de pronunciación.</b> La <b>H</b> inglesa suena como una J suave, casi un soplido: <i>Hello</i> se dice “jeló”.',
        '<b>Ojo con “Good night”.</b> Se usa para despedirse de noche o al irse a dormir, no para saludar.'
      ],
      dialogs: [
        { title: 'Presentándote', lines: [
          ['Good morning!', '¡Buenos días!'],
          ['My name is Fer.', 'Me llamo Fer.'],
          ['Nice to meet you.', 'Encantado de conocerte.']
        ] }
      ]
    },
    {
      title: 'Números y la hora',
      intro: 'Contar hasta cien y decir qué hora es.',
      items: [
        ['One', 'uan', 'Uno'],
        ['Two', 'tu', 'Dos'],
        ['Three', 'zrí', 'Tres'],
        ['Four', 'for', 'Cuatro'],
        ['Five', 'fáiv', 'Cinco'],
        ['Six', 'siks', 'Seis'],
        ['Seven', 'séven', 'Siete'],
        ['Eight', 'éit', 'Ocho'],
        ['Nine', 'náin', 'Nueve'],
        ['Ten', 'ten', 'Diez'],
        ['Twenty', 'tuénti', 'Veinte'],
        ['One hundred', 'uan jóndred', 'Cien'],
        ['What time is it?', 'juát táim is it', '¿Qué hora es?'],
        ["It's three o'clock.", 'its zrí oclók', 'Son las tres en punto.'],
        ["It's half past five.", 'its jaf past fáiv', 'Son las cinco y media.'],
        ["It's a quarter past two.", 'its a cuórter past tu', 'Son las dos y cuarto.'],
        ["It's a quarter to eight.", 'its a cuórter tu éit', 'Son las ocho menos cuarto.']
      ],
      tips: [
        '<b>El sonido TH.</b> En <i>three</i> la lengua se asoma entre los dientes y se sopla suave: suena entre “z” y “f”. Ensáyalo despacio.',
        '<b>Thirteen y thirty se parecen.</b> En <i>thirTEEN</i> (zertín) suena fuerte el final; en <i>THIRty</i> (zérti) suena fuerte el principio.',
        '<b>La hora:</b> <i>o’clock</i> es en punto, <i>half past</i> es y media, <i>a quarter past</i> es y cuarto y <i>a quarter to</i> es menos cuarto.'
      ],
      dialogs: [
        { title: 'Preguntando la hora', lines: [
          ['What time is it?', '¿Qué hora es?'],
          ["It's a quarter to eight.", 'Son las ocho menos cuarto.']
        ] }
      ]
    },
    {
      title: 'Verbo to be (ser y estar)',
      intro: 'En inglés un solo verbo hace de “ser” y de “estar”.',
      items: [
        ['I am', 'ai am', 'Yo soy / yo estoy'],
        ['You are', 'iu ar', 'Tú eres / tú estás'],
        ['He is', 'ji is', 'Él es / él está'],
        ['She is', 'shi is', 'Ella es / ella está'],
        ['It is', 'it is', 'Es / está (cosas y animales)'],
        ['We are', 'ui ar', 'Nosotros somos / estamos'],
        ['They are', 'déi ar', 'Ellos son / están'],
        ["I'm fine.", 'aim fáin', 'Estoy bien.'],
        ['How are you?', 'jáu ar iu', '¿Cómo estás?'],
        ['Where are you from?', 'juér ar iu from', '¿De dónde eres?'],
        ["I'm from Spain.", 'aim from spéin', 'Soy de España.'],
        ['She is my friend.', 'shi is mái frend', 'Ella es mi amiga.'],
        ["I'm not tired.", 'aim not táierd', 'No estoy cansado.'],
        ['They are at home.', 'déi ar at jóum', 'Ellos están en casa.']
      ],
      tips: [
        '<b>Un verbo para dos.</b> I am, you are, he/she/it is, we/they are. Según el contexto significa “ser” o “estar”.',
        '<b>El pronombre es obligatorio.</b> En español dices “estoy bien”; en inglés siempre <i>I’m fine</i>.',
        '<b>Contracciones.</b> Al hablar se acorta: I am → I’m, you are → you’re, he is → he’s.',
        '<b>Para negar</b> se añade <i>not</i> detrás: I am not tired.',
        '<b>SH.</b> En <i>she</i> suena como cuando pides silencio: “shhh”.'
      ],
      dialogs: [
        { title: 'Un saludo con pregunta', lines: [
          ['Hello! How are you?', '¡Hola! ¿Cómo estás?'],
          ["I'm fine. And you?", 'Estoy bien. ¿Y tú?']
        ] },
        { title: 'Conociendo a alguien', lines: [
          ['Where are you from?', '¿De dónde eres?'],
          ["I'm from Spain.", 'Soy de España.']
        ] }
      ]
    },
    {
      title: 'Frases útiles del día a día',
      intro: 'Las frases de cortesía y de supervivencia que más vas a usar.',
      items: [
        ['Please', 'plíis', 'Por favor'],
        ['Thank you', 'zank iu', 'Gracias'],
        ["You're welcome.", 'iur uélcom', 'De nada.'],
        ['Excuse me', 'ekskiús mi', 'Perdone / disculpe'],
        ["I'm sorry.", 'aim sóri', 'Lo siento.'],
        ["I don't understand.", 'ai dóunt anderstánd', 'No entiendo.'],
        ['Can you repeat, please?', 'kan iu ripít plíis', '¿Puede repetir, por favor?'],
        ['Speak slowly, please.', 'spík slóuli plíis', 'Hable despacio, por favor.'],
        ['Do you speak Spanish?', 'du iu spík spánish', '¿Habla español?'],
        ['I speak a little English.', 'ai spík a lítl ínglish', 'Hablo un poco de inglés.'],
        ["I don't know.", 'ai dóunt nóu', 'No lo sé.'],
        ['Help!', 'jelp', '¡Ayuda!']
      ],
      tips: [
        '<b>Thank you</b> se oye en todas partes. Entre amigos se dice también <i>thanks</i>.',
        '<b>Excuse me</b> sirve para llamar la atención o para pasar entre gente. <b>I’m sorry</b> es para pedir perdón o lamentar algo.',
        '<b>Tus dos mejores aliadas:</b> “Can you repeat, please?” y “Speak slowly, please.”'
      ],
      dialogs: [
        { title: 'Pidiendo que repitan', lines: [
          ['Excuse me, can you repeat, please?', 'Perdone, ¿puede repetir, por favor?'],
          ['Yes, of course.', 'Sí, claro.'],
          ['Thank you!', '¡Gracias!'],
          ["You're welcome.", 'De nada.']
        ] }
      ]
    },
    {
      title: 'Verbos básicos y frases sencillas',
      intro: 'Los verbos de cada día para hablar de ti y de lo que haces.',
      items: [
        ['I have a camera.', 'ai jav a kámera', 'Tengo una cámara.'],
        ['I want a coffee.', 'ai uónt a cófi', 'Quiero un café.'],
        ['I like photography.', 'ai láik fotógrafi', 'Me gusta la fotografía.'],
        ['I need help.', 'ai níid jelp', 'Necesito ayuda.'],
        ['I live in Spain.', 'ai liv in spéin', 'Vivo en España.'],
        ['I eat fish.', 'ai ít fish', 'Como pescado.'],
        ['I drink water.', 'ai drink uóter', 'Bebo agua.'],
        ['I go to the beach.', 'ai góu tu de bích', 'Voy a la playa.'],
        ['She likes tea.', 'shi láiks tí', 'A ella le gusta el té.'],
        ['He wants water.', 'ji uónts uóter', 'Él quiere agua.'],
        ['We go home.', 'ui góu jóum', 'Vamos a casa.'],
        ['Do you like coffee?', 'du iu láik cófi', '¿Te gusta el café?']
      ],
      tips: [
        '<b>He, she, it llevan -s.</b> I want → he wants; I like → she likes.',
        '<b>Dos casos especiales:</b> have → he has, go → she goes.',
        '<b>Preguntar</b> con <i>do</i> al principio: Do you like coffee?'
      ],
      dialogs: [
        { title: 'En casa', lines: [
          ['Do you like coffee?', '¿Te gusta el café?'],
          ['Yes, I like coffee.', 'Sí, me gusta el café.'],
          ['I want a coffee.', 'Quiero un café.']
        ] }
      ]
    },
    {
      title: 'Preguntar y pedir',
      intro: 'Tiendas, restaurantes y direcciones: cómo pedir con educación.',
      items: [
        ['How much is it?', 'jáu moch is it', '¿Cuánto cuesta?'],
        ['Where is the bathroom?', 'juér is de báthrum', '¿Dónde está el baño?'],
        ['I would like a coffee, please.', 'ai uud láik a cófi plíis', 'Quisiera un café, por favor.'],
        ['The menu, please.', 'de ménu plíis', 'La carta, por favor.'],
        ['The bill, please.', 'de bil plíis', 'La cuenta, por favor.'],
        ['A table for two, please.', 'a téibol for tu plíis', 'Una mesa para dos, por favor.'],
        ['Where is the station?', 'juér is de stéishon', '¿Dónde está la estación?'],
        ['Turn left.', 'tern left', 'Gire a la izquierda.'],
        ['Turn right.', 'tern ráit', 'Gire a la derecha.'],
        ['Go straight.', 'góu stréit', 'Siga recto.'],
        ['Is it far?', 'is it far', '¿Está lejos?'],
        ['Can I pay by card?', 'kan ai péi bai card', '¿Puedo pagar con tarjeta?']
      ],
      tips: [
        '<b>Would like</b> es más educado que <i>want</i>: “I would like…” equivale a “quisiera…”.',
        '<b>Please</b> al final suaviza cualquier petición.',
        '<b>The</b> se pronuncia “de” con la lengua entre los dientes, muy suave.',
        '<b>Direcciones:</b> left es izquierda, right es derecha y straight es recto.'
      ],
      dialogs: [
        { title: 'En la cafetería', lines: [
          ['Good afternoon. What would you like?', 'Buenas tardes. ¿Qué desea?'],
          ['I would like a coffee, please.', 'Quisiera un café, por favor.'],
          ['Here you are.', 'Aquí tiene.'],
          ['How much is it?', '¿Cuánto cuesta?']
        ] },
        { title: 'Preguntando el camino', lines: [
          ['Excuse me, where is the station?', 'Perdone, ¿dónde está la estación?'],
          ['Go straight and turn left.', 'Siga recto y gire a la izquierda.'],
          ['Is it far?', '¿Está lejos?'],
          ["No, it's five minutes.", 'No, está a cinco minutos.']
        ] }
      ]
    },
    {
      title: 'Pasado y futuro',
      intro: 'Contar lo que hiciste ayer y lo que harás mañana.',
      items: [
        ['Yesterday', 'iésterdei', 'Ayer'],
        ['Today', 'tudéi', 'Hoy'],
        ['Tomorrow', 'tumórou', 'Mañana'],
        ['Last week', 'last uík', 'La semana pasada'],
        ['Next week', 'nekst uík', 'La semana próxima'],
        ['I was tired.', 'ai uos táierd', 'Estaba cansado.'],
        ['I went to the beach.', 'ai uent tu de bích', 'Fui a la playa.'],
        ['I ate fish.', 'ai éit fish', 'Comí pescado.'],
        ['I took a photo.', 'ai tuk a fóutou', 'Hice una foto.'],
        ['I worked yesterday.', 'ai uorkt iésterdei', 'Ayer trabajé.'],
        ['I will go tomorrow.', 'ai uil góu tumórou', 'Iré mañana.'],
        ["I'm going to travel.", 'aim góuing tu trável', 'Voy a viajar.'],
        ['We will eat at home.', 'ui uil it at jóum', 'Comeremos en casa.']
      ],
      tips: [
        '<b>Pasado regular:</b> se añade <i>-ed</i> al verbo: work → worked.',
        '<b>Pasado irregular:</b> hay que aprenderlos. go → went, eat → ate, take → took, am/is → was.',
        '<b>Futuro:</b> <i>will</i> + verbo (I will go) o <i>going to</i> + verbo (I’m going to travel).'
      ],
      dialogs: [
        { title: 'Hablando de ayer', lines: [
          ['What did you do yesterday?', '¿Qué hiciste ayer?'],
          ['I went to the beach. I took a photo.', 'Fui a la playa. Hice una foto.'],
          ['Nice!', '¡Qué bien!']
        ] }
      ]
    },
    {
      title: 'Conversaciones completas',
      intro: 'Todo junto: tres conversaciones reales de principio a fin.',
      items: [
        ['Good afternoon. What would you like?', 'gud afternún. juát uud iu láik', 'Buenas tardes. ¿Qué desea?'],
        ['A coffee with milk, please.', 'a cófi uíz milk plíis', 'Un café con leche, por favor.'],
        ['Here you are.', 'jíer iu ar', 'Aquí tiene.'],
        ["That's three euros.", 'dats zrí iúrous', 'Son tres euros.'],
        ['Excuse me, where is the station?', 'ekskiús mi juér is de stéishon', 'Perdone, ¿dónde está la estación?'],
        ['Go straight and turn left.', 'góu stréit and tern left', 'Siga recto y gire a la izquierda.'],
        ["It's five minutes.", 'its fáiv mínits', 'Está a cinco minutos.'],
        ['Hello! How are you?', 'jeló jáu ar iu', '¡Hola! ¿Cómo estás?'],
        ["I'm fine, thank you. And you?", 'aim fáin zank iu. and iu', 'Estoy bien, gracias. ¿Y tú?'],
        ['Do you speak English?', 'du iu spík ínglish', '¿Habla inglés?'],
        ["A little. I'm learning.", 'a lítl. aim lérning', 'Un poco. Estoy aprendiendo.'],
        ['Have a nice day!', 'jav a náis dei', '¡Que tenga un buen día!'],
        ['See you tomorrow!', 'si iu tumórou', '¡Hasta mañana!']
      ],
      tips: [
        '<b>Ya puedes mantener una conversación.</b> Estas frases mezclan todo lo aprendido en las lecciones anteriores.',
        '<b>Practica en voz alta.</b> Escucha cada frase con 🔊 y repítela hasta que te salga sin mirar.'
      ],
      dialogs: [
        { title: 'En la cafetería', lines: [
          ['Good afternoon. What would you like?', 'Buenas tardes. ¿Qué desea?'],
          ['A coffee with milk, please.', 'Un café con leche, por favor.'],
          ['Here you are.', 'Aquí tiene.'],
          ["That's three euros.", 'Son tres euros.'],
          ['Thank you. Have a nice day!', 'Gracias. ¡Que tenga un buen día!']
        ] },
        { title: 'Preguntando el camino', lines: [
          ['Excuse me, where is the station?', 'Perdone, ¿dónde está la estación?'],
          ['Go straight and turn left.', 'Siga recto y gire a la izquierda.'],
          ['Is it far?', '¿Está lejos?'],
          ["No, it's five minutes.", 'No, está a cinco minutos.']
        ] },
        { title: 'Conociendo a alguien', lines: [
          ['Hello! How are you?', '¡Hola! ¿Cómo estás?'],
          ["I'm fine, thank you. And you?", 'Estoy bien, gracias. ¿Y tú?'],
          ['Do you speak English?', '¿Habla inglés?'],
          ["A little. I'm learning.", 'Un poco. Estoy aprendiendo.'],
          ['See you tomorrow!', '¡Hasta mañana!']
        ] }
      ]
    }
  ]
};
