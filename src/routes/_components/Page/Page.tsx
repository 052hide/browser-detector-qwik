import { $, component$, useStore, useOnWindow } from '@builder.io/qwik'

import Bowser, { type Parser } from 'bowser'

import { clsx } from 'clsx'
import { Card } from './Card'
import { CardText } from './CardText'

export const Page = component$(() => {
  const store = useStore<{
    userAgent?: Parser.ParsedResult
    screenSize?: { x: number; y: number }
  }>({ userAgent: undefined })

  useOnWindow(
    'load',
    $(() => {
      const browser = Bowser.getParser(window.navigator.userAgent)

      store.userAgent = {
        browser: browser.getBrowser(),
        os: browser.getOS(),
        platform: browser.getPlatform(),
        engine: browser.getEngine(),
      }

      store.screenSize = {
        x: window.innerWidth,
        y: window.innerHeight,
      }
    })
  )

  useOnWindow(
    'resize',
    $(() => {
      store.screenSize = {
        x: window.innerWidth,
        y: window.innerHeight,
      }
    })
  )

  return (
    <div>
      <p class={'tw-text-neutral-800 tw-font-bold'}>使用環境</p>
      <div class={clsx('tw-mt-4')}>
        <ul
          class={clsx('tw-grid tw-grid-cols-1 lg:tw-grid-cols-2', 'tw-gap-4')}
        >
          {store.userAgent && (
            <>
              <li>
                <Card title={'ブラウザ名'}>
                  <CardText>名称: {store.userAgent.browser.name}</CardText>
                  <CardText>
                    バージョン: {store.userAgent.browser.version}
                  </CardText>
                </Card>
              </li>
              <li>
                <Card title={'エンジン'}>
                  <CardText>名称: {store.userAgent.engine.name}</CardText>
                  <CardText>
                    バージョン: {store.userAgent.engine.version}
                  </CardText>
                </Card>
              </li>
              <li>
                <Card title={'OS'}>
                  <CardText>名称: {store.userAgent.os.name}</CardText>
                  <CardText>バージョン: {store.userAgent.os.version}</CardText>
                  <CardText>
                    バージョン名: {store.userAgent.os.versionName}
                  </CardText>
                </Card>
              </li>
              <li>
                <Card title={'プラットフォーム'}>
                  <CardText>タイプ: {store.userAgent.platform.type}</CardText>
                  <CardText>
                    ベンダー: {store.userAgent.platform.vendor}
                  </CardText>
                  <CardText>モデル: {store.userAgent.platform.model}</CardText>
                </Card>
              </li>
            </>
          )}
          {store.screenSize && (
            <li>
              <Card title={'スクリーンサイズ'}>
                <CardText>
                  {`${store.screenSize.x} x ${store.screenSize.y}`}
                </CardText>
              </Card>
            </li>
          )}
        </ul>
      </div>
      <div class={clsx('tw-mt-8')}>
        <a
          href={'https://github.com/052hide/browser-detector-qwik'}
          target="_blank"
          rel="noreferrer"
          class={clsx(
            'tw-underline',
            'tw-text-xs tw-text-neutral-800',
            'hover:tw-opacity-60 tw-transition tw-duration-300'
          )}
        >
          GitHub
        </a>
      </div>
    </div>
  )
})
