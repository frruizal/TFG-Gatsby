FROM node:12.13.0
  WORKDIR /home/fruizalejos/Documentos/workflow/tfgFrancisco_Drupal/tfgFrancisco_Drupal/web/gatsby
  RUN npm install
  RUN npm install nano
  RUN yarn global add gatsby-cli
  RUN npm install gatsby-source-drupal
  RUN npm install gatsby-awesome-pagination
  COPY package*.json ./
  RUN yarn
  COPY . .
  EXPOSE 3000
  #CMD ["node", "middleware.js"]
  CMD ["sh", "entrada.sh"]
  #CMD ["gatsby", "develop ", "-H", ".0.0.0.0"]

