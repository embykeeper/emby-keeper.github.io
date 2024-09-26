import{_ as i,c as a,a3 as t,o as e}from"./chunks/framework.C-yY9WsR.js";const E=JSON.parse('{"title":"从源码构建","description":"","frontmatter":{},"headers":[],"relativePath":"guide/Linux-从源码构建.md","filePath":"guide/Linux-从源码构建.md"}'),n={name:"guide/Linux-从源码构建.md"};function l(p,s,h,k,d,o){return e(),a("div",null,s[0]||(s[0]=[t(`<h1 id="从源码构建" tabindex="-1">从源码构建 <a class="header-anchor" href="#从源码构建" aria-label="Permalink to &quot;从源码构建&quot;">​</a></h1><h2 id="配置与部署" tabindex="-1">配置与部署 <a class="header-anchor" href="#配置与部署" aria-label="Permalink to &quot;配置与部署&quot;">​</a></h2><p>Embykeeper 可以从源码构建, 首先请拉取并设置环境:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/emby-keeper/embykeeper.git</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">make</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">make</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span></span></code></pre></div><p>命令将会在 <code>embykeeper</code> 目录下生成模板 <code>config.toml</code> 文件 (您也可以从<a href="https://github.com/emby-keeper/embykeeper/blob/main/config.example.toml" target="_blank" rel="noreferrer">这里</a>下载).</p><p>请您根据模板文件中的注释 (以<code>#</code>开头), 配置您的账户信息.</p><p>您也可以使用最小配置, 例如:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-LXHSD" id="tab-UHJM8n_" checked><label for="tab-UHJM8n_">config.toml</label></div><div class="blocks"><div class="language-toml vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">toml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">telegram</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">phone = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;+8612109347899&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">emby</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">url = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://weiss-griffin.com:443&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">username = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;carrie19&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">password = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;s*D7MMCpS$&quot;</span></span></code></pre></div></div></div><details class="details custom-block"><summary>只进行机器人签到的配置</summary><p>您可以只使用 <code>telegram</code> 标签:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-ku2Dr" id="tab-mMK2TI_" checked><label for="tab-mMK2TI_">config.toml</label></div><div class="blocks"><div class="language-toml vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">toml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">telegram</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">phone = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;+8612109347899&quot;</span></span></code></pre></div></div></div></details><details class="details custom-block"><summary>只进行 Emby 模拟观看的配置</summary><p>您可以只使用 <code>emby</code> 标签:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-9AJ6L" id="tab-_8mSwJH" checked><label for="tab-_8mSwJH">config.toml</label></div><div class="blocks"><div class="language-toml vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">toml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">emby</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">url = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://weiss-griffin.com:443&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">username = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;carrie19&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">password = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;s*D7MMCpS$&quot;</span></span></code></pre></div></div></div></details><details class="details custom-block"><summary>使用多个账号的配置</summary><p>您可以使用多个 <code>telegram</code> 或 <code>emby</code> 标签来定义多个账户:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-zg3fp" id="tab-La-1O7G" checked><label for="tab-La-1O7G">config.toml</label></div><div class="blocks"><div class="language-toml vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">toml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">telegram</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">phone = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;+8618323433500&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">telegram</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">phone = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;+8615635499568&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">emby</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">url = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://jensen.biz/&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">username = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;nbernard&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">password = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;*%NO1K^tr#&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">emby</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">url = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://barnett.org/&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">username = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;danielmartin&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">password = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2!8Mn9tpRT&quot;</span></span></code></pre></div></div></div></details><details class="details custom-block"><summary>连接代理的配置</summary><p>若您需要连接代理, 还需要增加代理配置:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-9XB9D" id="tab-n3lZfSZ" checked><label for="tab-n3lZfSZ">config.toml</label></div><div class="blocks"><div class="language-toml vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">toml</span><pre class="shiki shiki-themes github-light github-dark has-diff vp-code" tabindex="0"><code><span class="line diff add"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">proxy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span></span>
<span class="line diff add"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">hostname = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;127.0.0.1&quot;</span></span>
<span class="line diff add"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">port = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1080</span></span>
<span class="line diff add"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">scheme = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;socks5&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">telegram</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">phone = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;+8612109347899&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">emby</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">url = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://weiss-griffin.com:443&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">username = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;carrie19&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">password = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;s*D7MMCpS$&quot;</span></span></code></pre></div></div></div></details><details class="details custom-block"><summary>使用群组监控和自动水群的配置</summary><p>若您是 <a href="/guide/高级用户"><strong>👑 高级用户</strong></a> 并希望开启 <a href="/guide/功能说明-群组监控">👀 群组监控</a> 与 <a href="/guide/功能说明-自动水群">💬 自动水群</a> 功能, 请调节 <code>monitor</code> 和 <code>send</code> 选项:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-Xa6Tp" id="tab-JPbNySM" checked><label for="tab-JPbNySM">config.toml</label></div><div class="blocks"><div class="language-toml vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">toml</span><pre class="shiki shiki-themes github-light github-dark has-diff vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">telegram</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">phone = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;+8612109347899&quot;</span></span>
<span class="line diff add"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">monitor = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 开启群组监控</span></span>
<span class="line diff add"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">messager = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 开启自动水群</span></span></code></pre></div></div></div></details><details class="details custom-block"><summary>仅开启某些站点的配置</summary><p>你可以仅开启某些站点的 签到 (<code>checkiner</code>) / 监控 (<code>monitor</code>) / 水群 (<code>messager</code>).</p><p>请按格式填入<a href="/guide/支持的站点"><strong>🎬 支持的站点</strong></a>:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-hGF5J" id="tab-EDOkhui" checked><label for="tab-EDOkhui">config.toml</label></div><div class="blocks"><div class="language-toml vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">toml</span><pre class="shiki shiki-themes github-light github-dark has-diff vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">service</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line diff add"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">checkiner = [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;charon&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;embyhub&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;jms&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;judog&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ljyy&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;magic&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;peach&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;pornemby&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;sssq&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;temby&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;terminus&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 自定义多个签到站点</span></span>
<span class="line diff add"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">monitor = [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;bgk&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 仅开启一个监控站点</span></span>
<span class="line diff add"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># messager 将保持默认值</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">telegram</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">phone = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;+8612109347899&quot;</span></span></code></pre></div></div></div></details><div class="tip custom-block"><p class="custom-block-title">更多配置</p><p>更多配置项详见 <a href="/guide/配置文件">🔧 配置文件</a>.</p></div><p>然后, 再次运行:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">make</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span></span></code></pre></div><p>您将被询问设备验证码以登录, 登录成功后, Embykeeper 将首先执行一次签到和保活, 此后每日进行一次签到和保活.</p><p>恭喜您！您已经成功构建了 Embykeeper.</p><div class="info custom-block"><p class="custom-block-title">支持</p><p>您可以通过 <a href="https://t.me/embykeeper_chat_bot" target="_blank" rel="noreferrer">Telegram 讨论群</a> 反馈你遇到的问题.</p><p>如果您觉得 Embykeeper 好用的话, 您可以通过 <a href="https://afdian.com/a/jackzzs" target="_blank" rel="noreferrer">爱发电</a> 赞助 ^_^</p><p><img src="https://github.com/emby-keeper/embykeeper/raw/main/images/kitty.gif" alt="Kitty"></p></div><h2 id="服务持久化" tabindex="-1">服务持久化 <a class="header-anchor" href="#服务持久化" aria-label="Permalink to &quot;服务持久化&quot;">​</a></h2><p>您可以通过 <a href="https://www.ruanyifeng.com/blog/2016/03/systemd-tutorial-commands.html" target="_blank" rel="noreferrer">systemd</a> 部署自启动服务.</p><p>首先, 您需要成功登录运行一次, 然后请运行:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">make</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> systemd</span></span></code></pre></div><p>这将在 <code>~/.config/systemd/user</code> 中创建服务, 使 Embykeeper 在用户登录时自动启动.</p><h2 id="版本更新" tabindex="-1">版本更新 <a class="header-anchor" href="#版本更新" aria-label="Permalink to &quot;版本更新&quot;">​</a></h2><p>当您需要更新版本时, 您需要执行:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git pull</span></span></code></pre></div><p>然后重新运行应用.</p>`,29)]))}const c=i(n,[["render",l]]);export{E as __pageData,c as default};
