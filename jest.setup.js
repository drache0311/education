import '@testing-library/jest-dom'

function initializeDom() {
  const modalRoot = document.getElementById('modal')
  if (!modalRoot) {
    const element = document.createElement('div')
    element.id = 'modal'
    document.body.appendChild(element)
  }
}

global.IntersectionObserver = class IntersectionObserver {
  constructor(callback, options) {
    this.viewPort = options.root
    this.entries = []
    this.viewPort?.addEventListener('scroll', () => {
      this.entries.map((entry) => {
        entry.isIntersecting = this.isInViewPort(entry.target)
      })
      callback(this.entries, this)
    })
  }

  isInViewPort(target) {
    return true
  }

  observe(target) {
    this.entries.push({ isIntersecting: true, target })
  }

  unobserve(target) {
    this.entries = this.entries.filter((ob) => ob.target !== target)
  }

  disconnect() {
    this.entries = []
  }
}

initializeDom()
