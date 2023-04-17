(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{439:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("div",{staticClass:"abstract-box"},[s("p",[s("img",{attrs:{src:"/Abstract/dailyTrivia/zsh-iterm2.png",alt:"zsh times"}})])]),t._v(" "),s("h3",{attrs:{id:"为何启动-iterm2时-会卡一下"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为何启动-iterm2时-会卡一下"}},[t._v("#")]),t._v(" 为何启动 iTerm2时 会卡一下")]),t._v(" "),s("p",[t._v("一直发现 "),s("code",[t._v("zsh")]),t._v(" 启动时会卡一下，所以在找这个原因，然后发现其实是以下这个代码在作祟:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("NVM_DIR")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$HOME")]),t._v('/.nvm"')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-s")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/usr/local/opt/nvm/nvm.sh"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/usr/local/opt/nvm/nvm.sh"')]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# This loads nvm")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-s")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/usr/local/opt/nvm/etc/bash_completion.d/nvm"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/usr/local/opt/nvm/etc/bash_completion.d/nvm"')]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# This loads nvm bash_completion")]),t._v("\n")])])]),s("p",[t._v("可以看到 这段代码是用来加载 "),s("code",[t._v("nvm")]),t._v(" 的，把这段移除就会有明显的速度提升，但移除的话我的 "),s("code",[t._v("nvm")]),t._v(" 就用不了了，该怎么办呢？经过一顿 google 后，发现了 "),s("a",{attrs:{href:"https://github.com/zdharma-continuum/zinit",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("zinit")]),s("OutboundLink")],1),t._v(" 这个插件，可以看到描述就是 "),s("em",[t._v("🌻 Flexible and fast ZSH plugin manager")]),t._v(" ，这不就解决了当前的问题了吗，哈哈哈哈")]),t._v(" "),s("p",[t._v("又因为我之前是用 "),s("a",{attrs:{href:"https://github.com/ohmyzsh/ohmyzsh",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("ohmyzsh")]),s("OutboundLink")],1),t._v("，但又不想抛弃其中的的一些好用的插件，那该怎么办呢？")]),t._v(" "),s("p",[t._v("答案就是 "),s("code",[t._v("zinit")]),t._v(" 支持加载 "),s("code",[t._v("omz")]),t._v(" 的插件，这不万事大吉吗！")]),t._v(" "),s("h3",{attrs:{id:"卸载-omz-改为-zinit-支持"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#卸载-omz-改为-zinit-支持"}},[t._v("#")]),t._v(" 卸载 "),s("code",[t._v("omz")]),t._v("，改为 "),s("code",[t._v("zinit")]),t._v(" 支持")]),t._v(" "),s("p",[t._v("安装 "),s("code",[t._v('sh -c "$(curl -fsSL https://git.io/zinit-install)"')])]),t._v(" "),s("p",[t._v("会初始化一个 "),s("code",[t._v(".zshrc")]),t._v(" 文件，并写入如下代码：")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("### Added by Zinit's installer")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-f")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$HOME")]),t._v("/.local/share/zinit/zinit.git/zinit.zsh "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n    print "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-P")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%F{33} %F{220}Installing %F{33}ZDHARMA-CONTINUUM%F{220} Initiative Plugin Manager (%F{33}zdharma-continuum/zinit%F{220})…%f"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("command")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-p")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$HOME")]),t._v('/.local/share/zinit"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("command")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" g-rwX "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$HOME")]),t._v('/.local/share/zinit"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("command")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/zdharma-continuum/zinit "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$HOME")]),t._v('/.local/share/zinit/zinit.git"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        print "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-P")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%F{33} %F{34}Installation successful.%f%b"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        print "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-P")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%F{160} The clone has failed.%f%b"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fi")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$HOME")]),t._v('/.local/share/zinit/zinit.git/zinit.zsh"')]),t._v("\nautoload "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-Uz")]),t._v(" _zinit\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("((")]),t._v(" ${"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("_comps} "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("))")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" _comps"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("zinit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("_zinit\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Load a few important annexes, without Turbo")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# (this is currently required for annexes)")]),t._v("\nzinit light-mode "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    zdharma-continuum/zinit-annex-as-monitor "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    zdharma-continuum/zinit-annex-bin-gem-node "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    zdharma-continuum/zinit-annex-patch-dl "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    zdharma-continuum/zinit-annex-rust\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("### End of Zinit's installer chunk")]),t._v("\n")])])]),s("p",[t._v("之后就是我们自己添加自定义代码了：")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("zinit light romkatv/zsh-defer\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 加载 onmyzsh 插件")]),t._v("\nzsh-defer zinit snippet OMZ::lib/history.zsh\nzsh-defer zinit snippet OMZ::lib/key-bindings.zsh\nzsh-defer zinit snippet OMZ::lib/git.zsh\nzsh-defer zinit snippet OMZ::plugins/sudo/sudo.plugin.zsh\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 加载插件")]),t._v("\nzsh-defer zinit "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("wait")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),t._v(" lucid "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    zsh-users/zsh-autosuggestions "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    agkozak/zsh-z "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    zsh-users/zsh-completions "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    zdharma-continuum/fast-syntax-highlighting\n\n"),s("span",{pre:!0,attrs:{class:"token function-name function"}},[t._v("export_init_fun")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("NVM_DIR")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$HOME")]),t._v('/.nvm"')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-s")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/usr/local/opt/nvm/nvm.sh"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/usr/local/opt/nvm/nvm.sh"')]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# This loads nvm")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-s")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/usr/local/opt/nvm/etc/bash_completion.d/nvm"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/usr/local/opt/nvm/etc/bash_completion.d/nvm"')]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# This loads nvm bash_completion")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("PATH")])]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/Users/mac/Yinge/cli/bin:'),s("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$PATH")]),t._v('"')]),t._v("\n    autoload "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-U")]),t._v(" compinit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" compinit\n\n    "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("PATH")])]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$HOME")]),t._v("/.ycli/release:"),s("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$PATH")]),t._v('"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nzsh-defer export_init_fun\n\n"),s("span",{pre:!0,attrs:{class:"token function-name function"}},[t._v("init_fun")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    autoload "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-U")]),t._v(" add-zsh-hook\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 切换目录如果有 .nvmrc 文件，根据内容切换 node 版本")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function-name function"}},[t._v("load_nvmrc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-f")]),t._v(" .nvmrc "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-r")]),t._v(" .nvmrc "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n        nvm use\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fi")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nadd-zsh-hook chpwd load_nvmrc\n\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("alias")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cd .."')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("eval")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("starship init "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("zsh")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v('"')]),t._v("\n")])])]),s("p",[t._v("可以看到其中还有一个 "),s("a",{attrs:{href:"https://github.com/romkatv/zsh-defer",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("zsh-defer")]),s("OutboundLink")],1),t._v(" 插件，这个就是用来延迟执行 zsh 命令的")]),t._v(" "),s("p",[t._v("所以根据这个 我们可以 延迟执行 "),s("code",[t._v("nvm")]),t._v(" 脚本: "),s("code",[t._v("zsh-defer export_init_fun")])]),t._v(" "),s("p",[t._v("可以看到 最后一句代码："),s("code",[t._v('eval "$(starship init zsh)"')]),t._v("，这是一个主题框架，我看到 "),s("code",[t._v("zinit")]),t._v(" 中有"),s("a",{attrs:{href:"https://github.com/zdharma-continuum/zinit#introduction",target:"_blank",rel:"noopener noreferrer"}},[t._v("如下代码 Prompt(Theme) Example"),s("OutboundLink")],1),t._v("：")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Load starship theme")]),t._v("\nzinit ice as"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"command"')]),t._v(" from"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"gh-r"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# `starship` binary as command, from github release")]),t._v("\n          atclone"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./starship init zsh > init.zsh; ./starship completions zsh > _starship"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# starship setup at clone(create init.zsh, completion)")]),t._v("\n          atpull"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%atclone"')]),t._v(" src"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"init.zsh"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# pull behavior same as clone, source init.zsh")]),t._v("\nzinit light starship/starship\n")])])]),s("p",[t._v("但最后执行不成功，可能是我之前用 "),s("code",[t._v("brew install starship")]),t._v(" 的原因 🤔 ?")]),t._v(" "),s("p",[t._v("经过一番调教后 "),s("code",[t._v("zsh")]),t._v(" 启动速度 嗖嗖的 哈哈哈哈哈哈")]),t._v(" "),s("h3",{attrs:{id:"分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分析"}},[t._v("#")]),t._v(" 分析")]),t._v(" "),s("ul",[s("li",[t._v("对 Zsh 启动时间进行测量: "),s("code",[t._v("time zsh -i -c exit")])]),t._v(" "),s("li",[t._v("评估 Zsh 冷启动过程中的时间使用: 可以使用 "),s("code",[t._v("zprof")]),t._v("，这个 zsh 自带的工具\n"),s("ul",[s("li",[t._v("在 .zshrc 的最开头新增一行并写入 zmodload zsh/zprof；")]),t._v(" "),s("li",[t._v("在 .zshrc 文件末尾添加一行再写入 zprof；")]),t._v(" "),s("li",[t._v("保存 .zshrc 再重启我们的 Zsh Shell（关闭再打开终端）；")])])])]),t._v(" "),s("h3",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),s("ul",[s("li",[t._v("[1] "),s("a",{attrs:{href:"https://www.aloxaf.com/2019/11/zplugin_tutorial/",target:"_blank",rel:"noopener noreferrer"}},[t._v("加速你的 zsh —— 最强 zsh 插件管理器 zplugin/zinit 教程"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("[2] "),s("a",{attrs:{href:"https://blog.futurenotfound.top/2021/07/30/zsh%E7%AE%A1%E7%90%86%E5%99%A8%EF%BC%9AOh-My-Zsh%E8%BD%AC%E4%B8%BAZinit/",target:"_blank",rel:"noopener noreferrer"}},[t._v("zsh管理器：Oh-My-Zsh 转为 Zinit"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("[3] "),s("a",{attrs:{href:"https://spencerwoo.com/blog/remove-nvm-to-speed-up-zsh",target:"_blank",rel:"noopener noreferrer"}},[t._v("Quit using nvm：快删掉这个占据 Zsh 启动时间一半的怪物！"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);