// migrate-frontmatter.mjs
// Roda na raiz do projeto: node migrate-frontmatter.mjs
// Remove o aninhamento "meta:" do frontmatter de todos os .md em content/blog/

import { readFileSync, writeFileSync, readdirSync } from 'fs'
import { join } from 'path'

const BLOG_DIR = '../content/blog'

const files = readdirSync(BLOG_DIR).filter(f => f.endsWith('.md'))

for (const file of files) {
  const filePath = join(BLOG_DIR, file)
  const content = readFileSync(filePath, 'utf-8')

  // Extrai o frontmatter
  const match = content.match(/^---\n([\s\S]*?)\n---/)
  if (!match) {
    console.log(`⚠️  Sem frontmatter: ${file}`)
    continue
  }

  const frontmatter = match[1]
  const body = content.slice(match[0].length)

  // Verifica se tem o bloco meta:
  if (!frontmatter.includes('\nmeta:')) {
    console.log(`✅ Já ok (sem meta aninhado): ${file}`)
    continue
  }

  // Achata o meta: — pega as linhas dentro do bloco e remove a indentação
  const newFrontmatter = frontmatter.replace(
    /\nmeta:\n((?:  .+\n?)*)/g,
    (_, metaBlock) => {
      const lines = metaBlock
        .split('\n')
        .filter(l => l.trim())
        .map(l => '\n' + l.replace(/^  /, '')) // remove 2 espaços de indentação
      return lines.join('')
    }
  )

  const newContent = `---\n${newFrontmatter}\n---${body}`
  writeFileSync(filePath, newContent, 'utf-8')
  console.log(`✅ Migrado: ${file}`)
}

console.log('\n🎉 Migração concluída!')
