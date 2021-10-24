const linksSocialMedia = {
  github: 'MichelleCordeiro',
  linkedin: 'michelle-cordeiro',
  youtube: '',
  instagram: '_michellecordeiro_',
  facebook: 'michellecordeir0',
  twitter: ''
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    //socialLinks é o id do UL, children pega os filhos de UL, q são as LIs
    const social = li.getAttribute('class') //a variavel SOCIAL recebe o valor dos atributos class da variavel LI, q tem todas as lis de UL
    //  alert(social)
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
    // li.children[0].href  pega o HREF do 1o filho de cada LI, q é a tag A, então pega o href do a de cada um dos filhos da variavel LI
    //  `https://${social}.com/${linksSocialMedia[social]}`  usa crases pq além do texto passa tbm variavel. ${nome_da_variavel}

    // alert(li.children[0].href)
  }
}

changeSocialMediaLinks()

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}` // o nome disso é template string
  //alert(url)

  //arrow function
  //fetch(url).then(response => { response.json() })    // como só tem uma resposta não precisa das { }

  fetch(url)
    .then(response => response.json())
    //.then(data => alert(data.bio))    // p checar se tá pegando o valor
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      //userLink.textContent = data.login       a logo do github sumiu, add a tag span e novo id
      userLogin.textContent = data.login
    })
}

getGithubProfileInfos()

/*Troca a imagem do background ao clicar*/
const bgColors = {
  yellow: "url('images/bg-card-desktop-yellow')",
  gray: "url('images/bg-card-desktop-yellow')",
  purple: "url('images/bg-card-desktop-yellog')"
}

function changeBg() {
  document.container.style.background = `${bgColors}`
}

changeBg()
