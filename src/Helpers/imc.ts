export type LevelsProps = {
  title: string;
  color: string;
  icon: "down" | 'up'
  imc: number[]
  youImc?: number
}

export const levels: LevelsProps[] = [
  {
    title: "Magreza",
    color: "#96a3ab",
    icon: "down",
    imc: [0,18.5]
  },
  {
    title: "Normal",
    color: "#0ead69",
    icon: "up",
    imc: [18.6, 24.9]
  },
  {
    title: "Sobrepeso",
    color: "#e2b039",
    icon: "down",
    imc: [25,30]
  },
  {
    title: "Sobrepeso",
    color: "#c3423f",
    icon: "down",
    imc: [30.1,99]
  }
]

export function calulateImc(altura: number, peso: number){ 
  const imc = peso / (altura * altura)

  for(let i in levels){
    if(imc >= levels[i].imc[0] && imc <= levels[i].imc[1]){
      let levelCopy: LevelsProps = {...levels[i]}

      levels[i].youImc = parseFloat(imc.toFixed(2))
      return levelCopy
    }
  }
  
  return null 
}