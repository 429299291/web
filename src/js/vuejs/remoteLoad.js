/**
 * Created by yu06.gao on 2017/8/17.
 */
export default function remoteLoad (url, type, hasCallback) {
  return createScript(url, type)
  /**
   * 创建script
   * @param url
   * @returns {Promise}
   */
  function createScript (url, type) {
    let scriptElement = document.createElement(type)
    scriptElement.src = url
    if (type === 'link') {
      scriptElement.rel = 'stylesheet'
      scriptElement.type = 'text/css'
      scriptElement.href = url
    }
    document.body.appendChild(scriptElement)

    var promise = new Promise((resolve, reject) => {
      scriptElement.addEventListener('load', e => {
        removeScript(scriptElement)
        if (!hasCallback) {
          resolve(e)
        }
      }, false)
      scriptElement.addEventListener('error', e => {
        removeScript(scriptElement)
        reject(e)
      }, false)
      if (hasCallback) {
        window.____callback____ = function () {
          resolve()
          window.____callback____ = null
        }
      }
    })

    if (hasCallback) {
      url += '&callback=____callback____'
    }

    return promise
  }

  /**
   * 移除script标签
   * @param scriptElement script dom
   */
  function removeScript (scriptElement) {
    document.body.removeChild(scriptElement)
  }
}
