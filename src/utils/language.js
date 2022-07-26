import { createI18n } from 'vue-i18n'
export const messages = {
    'zh-cn': {
        p1: '你好世界',
        p2: '永不低头',
        p3: '我总在最深的绝望里，遇见最美的惊喜'
    },
    en: {
        p1: 'Hello World',
        p2: "Hang in there",
        p3: 'I always in the deepest despair,meet the most beautiful surprise'
    },
    ja: {
        p1: 'こんにちは、世界',
        p2: '決して頭を下げない',
        p3: '私はいつも最も深い絶望の中で、最も美しい驚きに会いました'
    }
}

const i18n = createI18n({
    locale: 'zh-cn',
    fallbackLocale: 'en',
    messages
})

export const installI18n = (app) => {
    app.use(i18n)
}