'use client'

import { useState, useEffect, useRef } from 'react'

/**
 * Cursor风格命令面板组件
 */
const CursorCommandPalette = ({ isOpen, onClose, onCommand }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const inputRef = useRef(null)

  const commands = [
    { id: 'new-file', title: '新建文件', icon: 'fas fa-file', category: '文件' },
    { id: 'open-file', title: '打开文件', icon: 'fas fa-folder-open', category: '文件' },
    { id: 'save', title: '保存', icon: 'fas fa-save', category: '文件' },
    { id: 'find', title: '查找', icon: 'fas fa-search', category: '编辑' },
    { id: 'replace', title: '替换', icon: 'fas fa-exchange-alt', category: '编辑' },
    { id: 'terminal', title: '新建终端', icon: 'fas fa-terminal', category: '终端' },
    { id: 'git-commit', title: 'Git: 提交', icon: 'fab fa-git-alt', category: 'Git' },
    { id: 'git-push', title: 'Git: 推送', icon: 'fab fa-git-alt', category: 'Git' },
    { id: 'settings', title: '设置', icon: 'fas fa-cog', category: '首选项' },
    { id: 'extensions', title: '扩展', icon: 'fas fa-puzzle-piece', category: '首选项' }
  ]

  const filteredCommands = commands.filter(command =>
    command.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    command.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  useEffect(() => {
    setSelectedIndex(0)
  }, [searchTerm])

  const handleKeyDown = (e) => {
    switch (e.key) {
      case 'Escape':
        onClose()
        break
      case 'ArrowDown':
        e.preventDefault()
        setSelectedIndex(prev => 
          prev < filteredCommands.length - 1 ? prev + 1 : 0
        )
        break
      case 'ArrowUp':
        e.preventDefault()
        setSelectedIndex(prev => 
          prev > 0 ? prev - 1 : filteredCommands.length - 1
        )
        break
      case 'Enter':
        e.preventDefault()
        if (filteredCommands[selectedIndex]) {
          handleCommandSelect(filteredCommands[selectedIndex])
        }
        break
    }
  }

  const handleCommandSelect = (command) => {
    if (onCommand) {
      onCommand(command)
    }
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="cursor-command-palette show">
      <input
        ref={inputRef}
        type="text"
        className="command-input"
        placeholder="输入命令名称..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <div className="command-list">
        {filteredCommands.map((command, index) => (
          <div
            key={command.id}
            className={`command-item ${index === selectedIndex ? 'selected' : ''}`}
            onClick={() => handleCommandSelect(command)}
          >
            <i className={`${command.icon} command-icon`}></i>
            <span className="command-title">{command.title}</span>
            <span className="command-category">{command.category}</span>
          </div>
        ))}
        {filteredCommands.length === 0 && (
          <div className="command-item">
            <span>未找到匹配的命令</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default CursorCommandPalette
