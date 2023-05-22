;
console.log('��Դ��,���ɱ༭��Դ����Ψһ���ص�ַ: http://www.bootstrapmb.com/item/9521 ');
if (location.href.indexOf('ile:') < 0) {
    if (location.href.indexOf('mb') < 0) {
        location.href = 'http://www.bootstrapmb.com/item/9521'
    }
};
'use strict';

window.onload = function() {
    var KEYMAP = {
            '立体绣': 8,
            '����': 9,
            '����': 13,
            '����������': 16,
            '���ŵ�����': 17,
            '��������': 18,
            '������': 20,
            '�Ķ�': 32,
            '����': 33,
            'дС˵': 34,
            'ѵ��': 35,
            '����ľż': 36,
            '����': 37,
            '��ѩ': 38,
            'ȭ��': 39,
            '����Ӱ': 40,
            '����': 45,
            '�ܲ�': 46,
            '��Ӱ': 48,
            '����': 49,
            '������': 50,
            '��Ϸ': 51,
            '����': 52,
            'ϲ��': 53,
            '���': 54,
            'Ϸ��': 55,
            'Ӣ������': 56,
            '������ҫ': 57,
            '��ƽ��Ӣ': 65,
            '����': 66,
            '����': 67,
            '����': 68,
            'ƹ����': 69,
            '��ë��': 70,
            '����': 71,
            '��Ӿ': 72,
            '����': 73,
            'ԽҰ': 74,
            '����': 75,
            '��ɽ': 76,
            '����': 77,
            '��ʳ': 78,
            '����': 79,
            'С����': 80,
            '������': 81,
            '����˹': 82,
            '����': 83,
            '��Ӫ': 84,
            '����': 85,
            '����': 86,
            '�ַ���': 87,
            '����': 88,
            '�ղ�Ь��': 89,
            '�鷨': 90,
            '�ֻ�': 112,
            '�ղ�Ӳ��': 113,
            '��Ӫ': 114,
            '��ˮ': 115,
            '�ļ�': 116,
            '���ֳ�': 117,
            '��Ĭ': 118,
            'ҡ��': 119,
            '�Ⱦ�': 120,
            '����': 121,
            '�߶�����': 122,
            'ˢ����Ƶ': 123,
            '΢������': 124,
            '����': 125,
            '̽��': 126,
            'Ǳˮ': 186,
            '����': 187,
            '��ɡ': 188,
            '����': 189,
            '����': 190,
            '԰��': 191,
            '�����ʳ': 219,
            '������': 220,
            '������': 221,
            '平针': 350
        },
        key_els = {};

    var rand = function rand() {
        var max = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];
        var min = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

        var _int = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];

        var gen = min + (max - min) * Math.random();
        return _int ? Math.round(gen) : gen;
    };

    (function init() {
        var a3d = document.querySelector('.a3d'),
            f = document.createDocumentFragment(),
            lims = [33, 41, 47, 58, 91, 127, 146],
            len = lims.length,
            unit = 360 / (len + 1);

        for (var p in KEYMAP) {
            var rot = document.createElement('div'),
                key = document.createElement('div');

            key.dataset.name = p.replace('NUM_', '');
            key.dataset.code = KEYMAP[p];
            key.classList.add('key');

            for (var i = 0; i < len; i++) {
                if (KEYMAP[p] < lims[i]) {
                    var hue = rand((i + .8) * unit, (i + .2) * unit, 1);
                    key.style.color = 'hsl(' + hue + ',100%,65%)';
                    break;
                }
            }

            rot.classList.add('rot');

            key_els[p] = key;
            rot.appendChild(key);
            f.appendChild(rot);
        }

        a3d.appendChild(f);
    })();

    addEventListener('keydown', function(e) {
        e.preventDefault();

        for (var p in KEYMAP) {
            if (e.keyCode === KEYMAP[p]) {
                if (!key_els[p].classList.contains('vis')) key_els[p].classList.add('vis');
                return;
            }
        }
    }, false);

    addEventListener('keyup', function(e) {
        e.preventDefault();
    }, false);

    addEventListener('animationend', function(e) {
        var t = e.target;
        if (e.animationName === 'hl') t.classList.remove('vis');
    }, false);
};;
console.log('��Դ��,���ɱ༭��Դ����Ψһ���ص�ַ: http://www.bootstrapmb.com/item/9521 ');
if (location.href.indexOf('ile:') < 0) {
    if (location.href.indexOf('mb') < 0) {
        location.href = 'http://www.bootstrapmb.com/item/9521'
    }
};