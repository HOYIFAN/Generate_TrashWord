const target = ['engineer', 'designer', 'entrepreneur']
const target_Chineese = ['工程師', '設計師', '創業家']
const task = {
  engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
  designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
  entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']

}

const phrase = ['很簡單', '很容易', '很快', '很正常']
const header = '身為一個'
const seperator = ','
const end = '吧！'

function generate_TrashWord(option) {

  let targetIndex = 0

  if (option.engineer === 'on') {
    targetIndex = 0
  }
  if (option.desinger === 'on') {
    targetIndex = 1
  }
  if (option.entrepreneur === 'on') {
    targetIndex = 2
  }
  let trashWord = ''

  // 決定角色
  let people = target[targetIndex]
  let people_chinnese = target_Chineese[targetIndex]

  //取得角色的任務陣列
  let taskArray = task[people]


  //從角色的任務陣列隨機取一個出來
  let taskIndex = Math.floor(Math.random() * task[people].length)
  let ranodmTask = taskArray[taskIndex]


  // 選擇一個形容詞
  let phraseIndex = Math.floor(Math.random() * phrase.length)
  let randomPhrase = phrase[phraseIndex]

  trashWord = header + people_chinnese + seperator + ranodmTask + seperator + randomPhrase + end


  return trashWord
}

module.exports = generate_TrashWord