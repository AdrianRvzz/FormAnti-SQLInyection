# FormAnti-SQLInyection


Previews:


Si falla llenando de cualquiera de estas maneras los campos:

![image](https://github.com/AdrianRvzz/FormAnti-SQLInyection/assets/101829447/2a303470-a65b-4b36-a991-e913f48f25cb)

Aqui se manda una petición al servidor y se espera la respuesta:

![image](https://github.com/AdrianRvzz/FormAnti-SQLInyection/assets/101829447/5dd4e1da-f2c5-4742-890c-036bc977ee1a)

Cuando se manda todo correctamente:

![image](https://github.com/AdrianRvzz/FormAnti-SQLInyection/assets/101829447/fdaa0ed0-eac0-4466-9f4f-e6b6de4db097)


Si el usuario borra la validacion de JS en el Front-End e intenta enviar un campo con alguna inyeccion SQL, en este caso una forma comun es
agregandole "--" como si fuera un comentario del lenguaje SQL al campo:
![image](https://github.com/AdrianRvzz/FormAnti-SQLInyection/assets/101829447/0a122671-90a5-47ee-839d-9e20d3277a1f)

Recibiria de respuesta:
![image](https://github.com/AdrianRvzz/FormAnti-SQLInyection/assets/101829447/42ff5d79-e7d7-4667-92ec-76a9ad18cbd0)





En esta parte del código hay una forma de evitar posibles inyecciones de SQL ademas revalidar el correo del formulario:
![image](https://github.com/AdrianRvzz/FormAnti-SQLInyection/assets/101829447/a5d84851-af79-49b8-a4ba-090fe4fcad35)

Y aqui se validan los datos de entrada en el frontend:
![image](https://github.com/AdrianRvzz/FormAnti-SQLInyection/assets/101829447/b3ab3e3f-1790-4453-be16-809a9fb1aaf9)



Adrián Rivas Escárcega
