(()=>{"use strict";var _={"./assets/ts/entities/entity.ts":(_,e)=>{Object.defineProperty(e,"__esModule",{value:!0});e.default=class{constructor(_,e,i,t,n){this.x=_,this.y=e,this.width=i,this.height=t,this.sprite=n}tick(){}render(_){_.drawImage(this.sprite[0],this.x,this.y,this.width,this.height)}}},"./assets/ts/entities/player.ts":function(_,e,i){var t=this&&this.__importDefault||function(_){return _&&_.__esModule?_:{default:_}};Object.defineProperty(e,"__esModule",{value:!0});const n=t(i("./assets/ts/entities/entity.ts"));class a extends n.default{constructor(_,e,i,t,n){super(_,e,i,t,n)}tick(){}render(_){_.drawImage(this.sprite[0],this.x,this.y,this.width,this.height)}}e.default=a},"./assets/ts/graphics/spritesheet.cheatsheet.ts":(_,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.SPRITESCOORD=void 0,e.SPRITESCOORD={wall_top_left:[16,0,16,16],wall_top_mid:[16,0,16,16],wall_top_right:[16,0,16,16],wall_left:[16,16,16,16],wall_mid:[32,16,16,16],wall_right:[48,16,16,16],wall_fountain_top:[64,0,16,16],wall_fountain_mid_red_anim_1:[64,16,16,16],wall_fountain_mid_red_anim_2:[80,16,16,16],wall_fountain_mid_red_anim_3:[96,16,16,16],wall_fountain_basin_red_anim_1:[64,32,16,16],wall_fountain_basin_red_anim_2:[80,32,16,16],wall_fountain_basin_red_anim_3:[96,32,16,16],wall_fountain_mid_blue_anim_1:[64,48,16,16],wall_fountain_mid_blue_anim_2:[80,48,16,16],wall_fountain_mid_blue_anim_3:[96,48,16,16],wall_fountain_basin_blue_anim_1:[64,64,16,16],wall_fountain_basin_blue_anim_2:[80,64,16,16],wall_fountain_basin_blue_anim_3:[96,64,16,16],wall_hole_1:[48,32,16,16],wall_hole_2:[48,48,16,16],wall_banner_red:[16,32,16,16],wall_banner_blue:[32,32,16,16],wall_banner_green:[16,48,16,16],wall_banner_yellow:[32,48,16,16],column_top:[80,80,16,16],column_mid:[80,96,16,16],coulmn_base:[80,112,16,16],wall_column_top:[96,80,16,16],wall_column_mid:[96,96,16,16],wall_coulmn_base:[96,112,16,16],wall_goo:[64,80,16,16],wall_goo_base:[64,96,16,16],floor_1:[16,64,16,16],floor_2:[32,64,16,16],floor_3:[48,64,16,16],floor_4:[16,80,16,16],floor_5:[32,80,16,16],floor_6:[48,80,16,16],floor_7:[16,96,16,16],floor_8:[32,96,16,16],floor_ladder:[48,96,16,16],floor_spikes_anim_1:[16,176,16,16],floor_spikes_anim_2:[32,176,16,16],floor_spikes_anim_3:[48,176,16,16],floor_spikes_anim_4:[64,176,16,16],wall_side_top_left:[0,112,16,16],wall_side_top_right:[16,112,16,16],wall_side_mid_left:[0,128,16,16],wall_side_mid_right:[16,128,16,16],wall_side_front_left:[0,144,16,16],wall_side_front_right:[16,144,16,16],wall_corner_top_left:[32,112,16,16],wall_corner_top_right:[48,112,16,16],wall_corner_left:[32,128,16,16],wall_corner_right:[48,128,16,16],wall_corner_bottom_left:[32,144,16,16],wall_corner_bottom_right:[48,144,16,16],wall_corner_front_left:[32,160,16,16],wall_corner_front_right:[48,160,16,16],wall_inner_corner_l_top_left:[80,128,16,16],wall_inner_corner_l_top_right:[64,128,16,16],wall_inner_corner_mid_left:[80,144,16,16],wall_inner_corner_mid_right:[64,144,16,16],wall_inner_corner_t_top_left:[80,160,16,16],wall_inner_corner_t_top_right:[64,160,16,16],edge:[96,128,16,16],hole:[96,144,16,16],doors_all:[16,221,64,35],doors_frame_left:[16,224,16,32],doors_frame_top:[32,221,32,3],"doors_frame_right:":[63,224,16,32],doors_leaf_closed:[32,224,32,32],doors_leaf_open:[80,224,32,32],chest_empty_open_anim_1:[304,288,16,16],chest_empty_open_anim_2:[320,288,16,16],chest_empty_open_anim_3:[336,288,16,16],chest_full_open_anim_1:[304,304,16,16],chest_full_open_anim_2:[320,304,16,16],chest_full_open_anim_3:[336,304,16,16],chest_mimic_open_anim_1:[304,320,16,16],chest_mimic_open_anim_2:[320,320,16,16],chest_mimic_open_anim_3:[336,320,16,16],flask_big_red:[288,224,16,16],flask_big_blue:[304,224,16,16],flask_big_green:[320,224,16,16],flask_big_yellow:[336,224,16,16],flask_red:[288,240,16,16],flask_blue:[304,240,16,16],flask_green:[320,240,16,16],flask_yellow:[336,240,16,16],skull:[288,320,16,16],crate:[288,298,16,22],coin_anim_1:[288,272,8,8],coin_anim_2:[304,272,8,8],coin_anim_3:[320,272,8,8],coin_anim_4:[336,272,8,8],ui_heart_full:[288,256,16,16],ui_heart_half:[304,256,16,16],ui_heart_empty:[320,256,16,16],weapon_knife:[293,18,6,13],weapon_rusty_sword:[307,26,10,21],weapon_regular_sword:[323,26,10,21],weapon_red_gem_sword:[339,26,10,21],weapon_big_hammer:[291,42,10,37],weapon_hammer:[307,55,10,24],weapon_baton_with_spikes:[323,57,10,22],weapon_mace:[339,55,10,24],weapon_katana:[293,82,6,29],weapon_saw_sword:[307,86,10,25],weapon_anime_sword:[322,81,12,30],weapon_axe:[341,90,9,21],weapon_machete:[294,121,5,22],weapon_cleaver:[310,124,8,19],weapon_duel_sword:[325,113,9,30],weapon_knight_sword:[339,114,10,29],weapon_golden_sword:[291,153,10,22],weapon_lavish_sword:[307,145,10,30],weapon_red_magic_staff:[324,145,8,30],weapon_green_magic_staff:[340,145,8,30],weapon_spear:[293,177,6,30],tiny_zombie_idle_anim_1:[368,16,16,16],tiny_zombie_idle_anim_2:[384,16,16,16],tiny_zombie_idle_anim_3:[400,16,16,16],tiny_zombie_idle_anim_4:[416,16,16,16],tiny_zombie_run_anim_1:[432,16,16,16],tiny_zombie_run_anim_2:[448,16,16,16],tiny_zombie_run_anim_3:[464,16,16,16],tiny_zombie_run_anim_4:[480,16,16,16],goblin_idle_anim_1:[368,32,16,16],goblin_idle_anim_2:[384,32,16,16],goblin_idle_anim_3:[400,32,16,16],goblin_idle_anim_4:[416,32,16,16],goblin_run_anim_1:[432,32,16,16],goblin_run_anim_2:[448,32,16,16],goblin_run_anim_3:[464,32,16,16],goblin_run_anim_4:[480,32,16,16],imp_idle_anim_1:[368,48,16,16],imp_idle_anim_2:[384,48,16,16],imp_idle_anim_3:[400,48,16,16],imp_idle_anim_4:[416,48,16,16],imp_run_anim_1:[432,48,16,16],imp_run_anim_2:[448,48,16,16],imp_run_anim_3:[464,48,16,16],imp_run_anim_4:[480,48,16,16],skelet_idle_anim_1:[368,80,16,16],skelet_idle_anim_2:[384,80,16,16],skelet_idle_anim_3:[400,80,16,16],skelet_idle_anim_4:[416,80,16,16],skelet_run_anim_1:[432,80,16,16],skelet_run_anim_2:[448,80,16,16],skelet_run_anim_3:[464,80,16,16],skelet_run_anim_4:[480,80,16,16],muddy_anim_1:[368,112,16,16],muddy_anim_2:[384,112,16,16],muddy_anim_3:[400,112,16,16],muddy_anim_4:[416,112,16,16],swampy_anim_1:[432,112,16,16],swampy_anim_2:[448,112,16,16],swampy_anim_3:[464,112,16,16],swampy_anim_4:[480,112,16,16],zombie_anim_1:[368,144,16,16],zombie_anim_2:[384,144,16,16],zombie_anim_3:[400,144,16,16],zombie_anim_4:[416,144,16,16],ice_zombie_anim_1:[432,144,16,16],ice_zombie_anim_2:[448,144,16,16],ice_zombie_anim_3:[464,144,16,16],ice_zombie_anim_4:[480,144,16,16],masked_orc_idle_anim_1:[368,172,16,20],masked_orc_idle_anim_2:[384,172,16,20],masked_orc_idle_anim_3:[400,172,16,20],masked_orc_idle_anim_4:[416,172,16,20],masked_orc_run_anim_1:[432,172,16,20],masked_orc_run_anim_2:[448,172,16,20],masked_orc_run_anim_3:[464,172,16,20],masked_orc_run_anim_4:[480,172,16,20],orc_warrior_idle_anim_1:[368,204,16,20],orc_warrior_idle_anim_2:[384,204,16,20],orc_warrior_idle_anim_3:[400,204,16,20],orc_warrior_idle_anim_4:[416,204,16,20],orc_warrior_run_anim_1:[432,204,16,20],orc_warrior_run_anim_2:[448,204,16,20],orc_warrior_run_anim_3:[464,204,16,20],orc_warrior_run_anim_4:[480,204,16,20],orc_shaman_idle_anim_1:[368,236,16,20],orc_shaman_idle_anim_2:[384,236,16,20],orc_shaman_idle_anim_3:[400,236,16,20],orc_shaman_idle_anim_4:[416,236,16,20],orc_shaman_run_anim_1:[432,236,16,20],orc_shaman_run_anim_2:[448,236,16,20],orc_shaman_run_anim_3:[464,236,16,20],orc_shaman_run_anim_4:[480,236,16,20],necromancer_anim_1:[368,268,16,20],necromancer_anim_2:[384,268,16,20],necromancer_anim_3:[400,268,16,20],necromancer_anim_4:[416,268,16,20],wogol_idle_anim_1:[368,300,16,20],wogol_idle_anim_2:[384,300,16,20],wogol_idle_anim_3:[400,300,16,20],wogol_idle_anim_4:[416,300,16,20],wogol_run_anim_1:[432,300,16,20],wogol_run_anim_2:[448,300,16,20],wogol_run_anim_3:[464,300,16,20],wogol_run_anim_4:[480,300,16,20],chort_idle_anim_1:[368,328,16,24],chort_idle_anim_2:[384,328,16,24],chort_idle_anim_3:[400,328,16,24],chort_idle_anim_4:[416,328,16,24],chort_run_anim_1:[432,328,16,24],chort_run_anim_2:[448,328,16,24],chort_run_anim_3:[464,328,16,24],chort_run_anim_4:[480,328,16,24],big_zombie_idle_anim_1:[16,270,32,34],big_zombie_idle_anim_2:[48,270,32,34],big_zombie_idle_anim_3:[80,270,32,34],big_zombie_idle_anim_4:[112,270,32,34],big_zombie_run_anim_1:[144,270,32,34],big_zombie_run_anim_2:[176,270,32,34],big_zombie_run_anim_3:[208,270,32,34],big_zombie_run_anim_4:[240,270,32,34],ogre_idle_anim_1:[16,320,32,32],ogre_idle_anim_2:[48,320,32,32],ogre_idle_anim_3:[80,320,32,32],ogre_idle_anim_4:[112,320,32,32],ogre_run_anim_1:[144,320,32,32],ogre_run_anim_2:[176,320,32,32],ogre_run_anim_3:[208,320,32,32],ogre_run_anim_4:[240,320,32,32],big_demon_idle_anim_1:[16,364,32,36],big_demon_idle_anim_2:[48,364,32,36],big_demon_idle_anim_3:[80,364,32,36],big_demon_idle_anim_4:[112,364,32,36],big_demon_run_anim_1:[144,364,32,36],big_demon_run_anim_2:[176,364,32,36],big_demon_run_anim_3:[208,364,32,36],big_demon_run_anim_4:[240,364,32,36],elf_f_idle_anim_1:[128,4,16,28],elf_f_idle_anim_2:[144,4,16,28],elf_f_idle_anim_3:[160,4,16,28],elf_f_idle_anim_4:[176,4,16,28],elf_f_run_anim_1:[192,4,16,28],elf_f_run_anim_2:[208,4,16,28],elf_f_run_anim_3:[224,4,16,28],elf_f_run_anim_4:[240,4,16,28],elf_f_hit:[256,4,16,28],elf_m_idle_anim_1:[128,36,16,28],elf_m_idle_anim_2:[144,36,16,28],elf_m_idle_anim_3:[160,36,16,28],elf_m_idle_anim_4:[176,36,16,28],elf_m_run_anim_1:[192,36,16,28],elf_m_run_anim_2:[208,36,16,28],elf_m_run_anim_3:[224,36,16,28],elf_m_run_anim_4:[240,36,16,28],elf_m_hit:[256,36,16,28],knight_f_idle_anim_1:[128,68,16,28],knight_f_idle_anim_2:[144,68,16,28],knight_f_idle_anim_3:[160,68,16,28],knight_f_idle_anim_4:[176,68,16,28],knight_f_run_anim_1:[192,68,16,28],knight_f_run_anim_2:[208,68,16,28],knight_f_run_anim_3:[224,68,16,28],knight_f_run_anim_4:[240,68,16,28],knight_f_hit:[256,68,16,28],knight_m_idle_anim_1:[128,100,16,28],knight_m_idle_anim_2:[144,100,16,28],knight_m_idle_anim_3:[160,100,16,28],knight_m_idle_anim_4:[176,100,16,28],knight_m_run_anim_1:[192,100,16,28],knight_m_run_anim_2:[208,100,16,28],knight_m_run_anim_3:[224,100,16,28],knight_m_run_anim_4:[240,100,16,28],knight_m_hit:[256,100,16,28],wizzard_f_idle_anim_1:[128,132,16,28],wizzard_f_idle_anim_2:[144,132,16,28],wizzard_f_idle_anim_3:[160,132,16,28],wizzard_f_idle_anim_4:[176,132,16,28],wizzard_f_run_anim_1:[192,132,16,28],wizzard_f_run_anim_2:[208,132,16,28],wizzard_f_run_anim_3:[224,132,16,28],wizzard_f_run_anim_4:[240,132,16,28],wizzard_f_hit:[256,132,16,28],wizzard_m_idle_anim_1:[128,164,16,28],wizzard_m_idle_anim_2:[144,164,16,28],wizzard_m_idle_anim_3:[160,164,16,28],wizzard_m_idle_anim_4:[176,164,16,28],wizzard_m_run_anim_1:[192,164,16,28],wizzard_m_run_anim_2:[208,164,16,28],wizzard_m_run_anim_3:[224,164,16,28],wizzard_m_run_anim_4:[240,164,16,28],wizzard_m_hit:[256,164,16,28],lizard_f_idle_anim_1:[128,196,16,28],lizard_f_idle_anim_2:[144,196,16,28],lizard_f_idle_anim_3:[160,196,16,28],lizard_f_idle_anim_4:[176,196,16,28],lizard_f_run_anim_1:[192,196,16,28],lizard_f_run_anim_2:[208,196,16,28],lizard_f_run_anim_3:[224,196,16,28],lizard_f_run_anim_4:[240,196,16,28],lizard_f_hit:[256,196,16,28],lizard_m_idle_anim_1:[128,228,16,28],lizard_m_idle_anim_2:[144,228,16,28],lizard_m_idle_anim_3:[160,228,16,28],lizard_m_idle_anim_4:[176,228,16,28],lizard_m_run_anim_1:[192,228,16,28],lizard_m_run_anim_2:[208,228,16,28],lizard_m_run_anim_3:[224,228,16,28],lizard_m_run_anim_4:[240,228,16,28],lizard_m_hit:[256,228,16,28]}},"./assets/ts/graphics/spritesheet.ts":function(_,e,i){var t=this&&this.__awaiter||function(_,e,i,t){return new(i||(i=Promise))((function(n,a){function s(_){try{l(t.next(_))}catch(_){a(_)}}function r(_){try{l(t.throw(_))}catch(_){a(_)}}function l(_){var e;_.done?n(_.value):(e=_.value,e instanceof i?e:new i((function(_){_(e)}))).then(s,r)}l((t=t.apply(_,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0});const n=i("./assets/ts/misc/constants.ts"),a=i("./assets/ts/graphics/spritesheet.cheatsheet.ts");class s{constructor(){this.spritesheet=document.createElement("img")}loadSprites(){return t(this,void 0,void 0,(function*(){yield this.setSpritesheet(),s.arraySpritesKeys=Object.keys(a.SPRITESCOORD);for(let _ in a.SPRITESCOORD){let e=a.SPRITESCOORD[_];const i=yield this.cutSprite(e[0],e[1],e[2],e[3]);s.arraySprites.push(i)}}))}setSpritesheet(){return new Promise(((_,e)=>{this.spritesheet.onload=()=>_(!0),this.spritesheet.onerror=e,this.spritesheet.src=n.SPRITESHEET}))}cutSprite(_,e,i,t){return createImageBitmap(this.spritesheet,_,e,i,t)}}e.default=s,s.arraySpritesKeys=new Array,s.arraySprites=new Array},"./assets/ts/main.ts":function(_,e,i){var t=this&&this.__awaiter||function(_,e,i,t){return new(i||(i=Promise))((function(n,a){function s(_){try{l(t.next(_))}catch(_){a(_)}}function r(_){try{l(t.throw(_))}catch(_){a(_)}}function l(_){var e;_.done?n(_.value):(e=_.value,e instanceof i?e:new i((function(_){_(e)}))).then(s,r)}l((t=t.apply(_,e||[])).next())}))},n=this&&this.__importDefault||function(_){return _&&_.__esModule?_:{default:_}};Object.defineProperty(e,"__esModule",{value:!0});const a=n(i("./assets/ts/entities/player.ts")),s=n(i("./assets/ts/graphics/spritesheet.ts")),r=i("./assets/ts/misc/constants.ts"),l=n(i("./assets/ts/misc/html.ts")),o=n(i("./assets/ts/world/world.ts"));class m{constructor(){this.spritesheet=new s.default,this.world=new o.default,this.appDiv=document.getElementById("app"),this.canvas=document.getElementById("canvas"),this.context2D=this.canvas.getContext("2d"),this.html=new l.default,this.scale=this.determineScale(),this.state=r.GameState.PLAY,this.isRunning=!1}main(){return t(this,void 0,void 0,(function*(){yield this.loadAssets(),m.player=new a.default(0,0,16,28,[s.default.arraySprites[s.default.arraySpritesKeys.indexOf("lizard_m_idle_anim_1")]]),m.entities.push(m.player),this.world.createWorld("./assets/img/map1.png"),this.initializeEvents(),this.adjustCanvas(),this.run()}))}tick(){m.entities.forEach(((_,e)=>{_.tick()}))}render(){m.tiles.forEach(((_,e)=>{_.render(this.context2D)})),m.entities.forEach(((_,e)=>{_.render(this.context2D)}))}run(){let _=this,e=0,i=0;this.isRunning=!0,window.requestAnimationFrame((function t(n){_.tick(),_.render(),"block"===_.html.spanFPS.style.display&&(e++,n-i>1e3&&(_.html.spanFPS.innerText=`${e}fps`,e=0,i=n)),_.isRunning&&window.requestAnimationFrame(t)}))}adjustCanvas(){this.canvas.width=r.WIDTH*this.scale,this.canvas.height=r.HEIGHT*this.scale,this.context2D.fillStyle="black",this.context2D.fillRect(0,0,r.WIDTH*this.scale,r.HEIGHT*this.scale),this.context2D.scale(this.scale,this.scale),this.context2D.imageSmoothingEnabled=!1}determineScale(){const _=this.appDiv.offsetWidth,e=this.appDiv.offsetHeight;let i=_/r.WIDTH;return i>=1&&(i=Math.floor(i),(r.WIDTH*i>_||r.HEIGHT*i>e)&&(i-=1)),i<1&&i>=.75?i=.75:i<.75&&i>=.5?i=.5:i<.5&&(i=.25),i}initializeEvents(){window.addEventListener("resize",(()=>{this.scale=this.determineScale(),this.adjustCanvas()}))}loadAssets(){return t(this,void 0,void 0,(function*(){yield this.spritesheet.loadSprites()}))}}e.default=m,m.tiles=new Array,m.entities=new Array;(new m).main()},"./assets/ts/misc/constants.ts":(_,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.GameState=e.TILE_SIZE=e.SPRITESHEET=e.HEIGHT=e.WIDTH=void 0,e.WIDTH=320,e.HEIGHT=180,e.SPRITESHEET="./assets/img/spritesheet.png",e.TILE_SIZE=16,function(_){_[_.INITIALIZING=0]="INITIALIZING",_[_.MAINMENU=1]="MAINMENU",_[_.PLAY=2]="PLAY",_[_.CUTSCENE=3]="CUTSCENE",_[_.PAUSEMENU=4]="PAUSEMENU",_[_.ENDING=5]="ENDING"}(e.GameState||(e.GameState={}))},"./assets/ts/misc/html.ts":(_,e)=>{Object.defineProperty(e,"__esModule",{value:!0});e.default=class{constructor(){this.spanFPS=document.getElementById("fpsCounter"),this.btnCredits=document.getElementById("btnCredits"),this.modalCredits=document.getElementById("modalCredits"),this.btnToggleFPS=document.getElementById("toggleFPS"),this.spanFPS.style.display="block",this.modalCredits.style.display="none",this.initializeEvents()}initializeEvents(){this.btnCredits.addEventListener("click",(()=>{"none"===this.modalCredits.style.display?this.modalCredits.style.display="block":this.modalCredits.style.display="none"})),this.btnToggleFPS.addEventListener("click",(()=>{"block"===this.spanFPS.style.display?this.spanFPS.style.display="none":this.spanFPS.style.display="block"}))}}},"./assets/ts/misc/utils.ts":(_,e)=>{Object.defineProperty(e,"__esModule",{value:!0});e.default=class{static RGBAToHexA(_,e,i,t){let n=_.toString(16),a=e.toString(16),s=i.toString(16),r=t.toString(16);return 1==n.length&&(n="0"+n),1==a.length&&(a="0"+a),1==s.length&&(s="0"+s),1==r.length&&(r="0"+r),"#"+n+a+s+r}}},"./assets/ts/world/floorTile.ts":function(_,e,i){var t=this&&this.__importDefault||function(_){return _&&_.__esModule?_:{default:_}};Object.defineProperty(e,"__esModule",{value:!0});const n=t(i("./assets/ts/world/tile.ts"));class a extends n.default{constructor(_,e,i){super(_,e,i)}}e.default=a},"./assets/ts/world/tile.ts":(_,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0});const t=i("./assets/ts/misc/constants.ts");e.default=class{constructor(_,e,i){this.x=_,this.y=e,this.sprite=i}render(_){_.drawImage(this.sprite,this.x,this.y,t.TILE_SIZE,t.TILE_SIZE)}}},"./assets/ts/world/wallTile.ts":function(_,e,i){var t=this&&this.__importDefault||function(_){return _&&_.__esModule?_:{default:_}};Object.defineProperty(e,"__esModule",{value:!0});const n=t(i("./assets/ts/world/tile.ts"));class a extends n.default{constructor(_,e,i){super(_,e,i)}}e.default=a},"./assets/ts/world/world.ts":function(_,e,i){var t=this&&this.__importDefault||function(_){return _&&_.__esModule?_:{default:_}};Object.defineProperty(e,"__esModule",{value:!0});const n=t(i("./assets/ts/world/floorTile.ts")),a=t(i("./assets/ts/main.ts")),s=t(i("./assets/ts/misc/utils.ts")),r=t(i("./assets/ts/world/wallTile.ts")),l=t(i("./assets/ts/graphics/spritesheet.ts"));e.default=class{constructor(){this.map=document.createElement("img"),this.canvas=document.createElement("canvas"),this.context2D=this.canvas.getContext("2d")}createWorld(_){let e=l.default.arraySprites[l.default.arraySpritesKeys.indexOf("floor_1")],i=l.default.arraySprites[l.default.arraySpritesKeys.indexOf("wall_hole_1")];this.map.src=_,this.map.onload=()=>{this.context2D.drawImage(this.map,0,0),this.map.style.display="none";for(let _=0;_<this.map.height;_++)for(let t=0;t<this.map.width;t++){let l=this.context2D.getImageData(t,_,1,1).data;switch(s.default.RGBAToHexA(l[0],l[1],l[2],l[3])){case"#ffffffff":a.default.tiles.push(new r.default(16*t,16*_,i));break;case"#0b2a83ff":a.default.player.x=16*t,a.default.player.y=16*_,a.default.tiles.push(new n.default(16*t,16*_,e));break;default:a.default.tiles.push(new n.default(16*t,16*_,e))}}}}}}},e={};(function i(t){var n=e[t];if(void 0!==n)return n.exports;var a=e[t]={exports:{}};return _[t].call(a.exports,a,a.exports,i),a.exports})("./assets/ts/main.ts")})();
//# sourceMappingURL=bundle.js.map