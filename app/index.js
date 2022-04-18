$('#home_arrow')
    .transition('set looping')
    .transition('pulse', '2000ms')

let moveElements = [{
    elementID: 'home_cat', item: document.getElementById("home_cat"), offset: [0, 0], originOffset: ['20%', '72.5%'], isDown: false, name: '王宣雅', trait: ['貓', '睡覺', '吃'], job: 'Engineer', image: 'hsuanya',
    content: '讀電機三年還是不知道學了什麼，是個每天三點都還沒睡但是從來沒辦法把書讀完的時間殺手，唯一的特長是如果沒人叫我起床的話我可以睡一整天。'
},
{
    elementID: 'home_freedom', item: document.getElementById("home_freedom"), offset: [0, 0], originOffset: ['15%', '45%'], isDown: false, name: '傅約榮', trait: ['自由奔放', '及時行樂', '天馬行空'], job: 'Engineer', image: 'MikazukiHikari',
    content: '我是電機大三的傅約榮，興趣是認識各種人、旅行、還有參加各種奇怪的社團，立志成為交際廣闊，遊歷四方的宅宅。「人生是一場嘉年華，讓自己每一個當下都活得有意義，讓人生的每個節點都過得有價值。」'
},
{
    elementID: 'home_meme', item: document.getElementById("home_meme"), offset: [0, 0], originOffset: ['25%', '17.5%'], isDown: false, name: '馬心慈', trait: ['梗圖', '睡覺', '刮刮樂'], job: 'Designer', image: 'mamamaxinz',
    content: '讀心理四年還是沒辦法知道你在想什麼。\n每個月都要買刮刮樂！財富自由靠這次。\n當你聯絡不到我的時候都在睡覺。'
},
{
    elementID: 'home_liver', item: document.getElementById("home_liver"), offset: [0, 0], originOffset: ['70%', '20%'], isDown: false, name: '張仁謙', trait: ['爆肝', 'coding', '追求完美'], job: 'Engineer', image: 'Jench2103',
    content: '我是電機系三年級的張仁謙，對於程式開發、系統設計等議題有莫名的熱衷，期許自己可以追求 stay hungry, stay foolish 的精神，並善用所學解決生活問題，盡工程師的本分、追求工程的卓越！'
},
{
    elementID: 'home_workhard', item: document.getElementById("home_workhard"), offset: [0, 0], originOffset: ['80%', '50%'], isDown: false, name: '謝亞城', trait: ['認真', '開朗', '吃'], job: 'Engineer', image: 'JeffYaCheng',
    content: '我是電機大三的謝亞城！是一位基督徒！送大家一節聖經吧！\n『神愛世人，甚至將祂的獨生子賜給他們，叫一切信入祂的，不至滅亡，反得永遠的生命。』'
}]
moveElements.forEach(function (moveElement) {
    moveElement['item'].addEventListener('mousedown', function (e) {
        moveElement['isDown'] = true
        moveElement['offset'] = [moveElement['item'].offsetLeft - e.clientX,
        moveElement['item'].offsetTop - e.clientY];
    }, true)
    moveElement['item'].addEventListener('mouseup', function () {
        moveElement['isDown'] = false
        let bowl = document.getElementById("home_bowl").getBoundingClientRect()
        let bowlPos = { top: bowl['top'], bottom: bowl['bottom'], left: bowl['left'], right: bowl['right'] }
        let moved = moveElement['item'].getBoundingClientRect()
        let movedPos = { top: moved['top'], bottom: moved['bottom'], left: moved['left'], right: moved['right'] }
        if (movedPos['right'] >= bowlPos['left'] && movedPos['bottom'] >= bowlPos['top'] && movedPos['left'] <= bowlPos['right'] && movedPos['top'] <= bowlPos['bottom']) {
            $('#person-base-name').text(moveElement['name'])
            $('#person-base-trait-1').text(moveElement['trait'][0])
            $('#person-base-trait-2').text(moveElement['trait'][1])
            $('#person-base-trait-3').text(moveElement['trait'][2])
            $('#person-base-job').text(moveElement['job'])
            $('#person-base-content').text(moveElement['content'])
            $('#' + moveElement['image']).removeClass('hidden')
            if (window.innerWidth < 1300) {
                $('#' + moveElement['elementID']).height(moved['height'])
                $('#' + moveElement['elementID']).width('auto')
            }
            $('#' + moveElement['elementID']).height('200%')
            $('#person-base').transition({ animation: 'fade', duration: '2s' })
            $('#home').transition({ animation: 'fade', duration: '2s' })
        }
    }, true)
    moveElement['item'].addEventListener('mousemove', function (e) {
        e.preventDefault();
        if (moveElement['isDown']) {
            moveElement['item'].style.left = (e.clientX + moveElement['offset'][0]) + 'px'
            moveElement['item'].style.top = (e.clientY + moveElement['offset'][1]) + 'px'
        }
    }, true)
})

$('#person-base-icon').click(function () {
    moveElements.forEach(function (moveElement) {
        moveElement['item'].style.left = moveElement['originOffset'][0]
        moveElement['item'].style.top = moveElement['originOffset'][1]
        moveElement['offset'] = [0, 0]
        if (!$('#' + moveElement['image']).hasClass('hidden')) {
            $('#' + moveElement['image']).transition({ animation: 'fade', duration: '1s' })
        }
        if (window.innerWidth > 1300) {
            $('#' + moveElement['elementID']).height('25%')
        } else {
            $('#' + moveElement['elementID']).height('auto')
            $('#' + moveElement['elementID']).width('10%')
        }
    })
    $('#person-base').transition({ animation: 'fade', duration: '1s' })
    $('#home').transition({ animation: 'fade', duration: '1s' })
})
