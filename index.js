const CursorDom = document.getElementById('cursor')
const ContentDom = document.getElementById('content')
let newNode = null //是否需要新建节点
const LanguageKeyword = ['def', 'class']

function init () {
    cursorFlicker()
    inputContent()
}

/**
 * 用户输入结果生成对应的内容
 */
function inputContent() {
    document.addEventListener('keydown', function(event) {
        const key = event.key
        // const numRef = new RegExp("[0-9]")
        // const letterRef = new RegExp("[a-zA-Z(){}:+-']")
        if (!key.trim() && key.length === 1) { //空格
            createNode('BlankSpace', ' ')    
        } else if (key === 'Enter') { //换行
            createNode(key, '')
        } else if (key === 'Backspace') {
            deleteNode(key)
        } else if (CursorDom && key.toString().length === 1) {
            createNode('letter', key)
        }
        // console.log('输入:', key)
        getCode()
    });
}


/**
 * 创建节点，比如用户输入时主动创建元素插入到ide容器中
 * key为letter时是输入普通字符比如1-9 a-zA-z
 * @param {*} key
 * @param {*} value
 */
function createNode (key, value) {
    if (key === 'letter') {
        newNode =  newNode === null ? document.createElement('span') : newNode
        newNode.innerText = newNode.innerText += value
        newNode.className = 'letter'
        ContentDom.insertBefore(newNode, CursorDom)
    } else if (key === 'BlankSpace') {
        newNode = document.createElement('span')
        newNode.innerText = value
        newNode.className = 'letter'
        ContentDom.insertBefore(newNode, CursorDom)
        highlightNode(newNode.previousSibling)
        newNode = null
    } else if (key === 'Enter') {
        newNode = document.createElement('div')
        newNode.className = 'enter'
        ContentDom.insertBefore(newNode, CursorDom)
        newNode = null
    }
}

/**
 * 节点是否高亮
 * @param {*} node 
 */
function highlightNode (node) {
    const key = node.innerText
    if (key && node && LanguageKeyword.includes(key)) {
        node.className = node.className += ' language-keyword'
    }
}

/**
 * 删除节点
 * type为Backspace: 点击Backspace，删除代码
 * @param {*} type 
 */
function deleteNode (type) {
    if (type === 'Backspace') {
        const node = CursorDom.previousSibling
        if (node && node.classList && node.classList.contains('letter')) {
            const txt = node.innerText
            node.innerText = txt.slice(0, -1)
            if (node.innerText === '') {
                node.remove()
            }
        } else if (node.className === 'enter') {
            node.remove()            
        }
    }
}

/**
 * 控制ide闪动
 */
function cursorFlicker() {
    let tag = true
    setInterval(() => {
        cursorControl(tag)
        tag = !tag
    }, 500)
}

/**
 * 控制ide光标是否显示
 * @param {*} show 
 */
function cursorControl(show) {
    CursorDom.style.display = show ? 'inline-block' : 'none'
}

function getCode() {
    const txt = ContentDom.innerText.split('\n')
    console.log(txt.join(''))
}

init()