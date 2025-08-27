//Thu Sep 19 2024 01:56:49 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const path = "lcc_tokens.json";
const request = require("request");
const $ = new Env("驴充充");
const fs = require("fs");
const {
  log
} = console;
let wait = 0;
let tokens = "";
let userToken = "";
let refreshToken = "";
let mark = "";
let refreshBack = 0;
let receiveTaskScoreBack = 0;
async function main() {
  const _0x50aaac = function () {
    let _0x1e6c51 = true;
    return function (_0x5bcf34, _0x7bc2e6) {
      const _0x50f28c = _0x1e6c51 ? function () {
        if (_0x7bc2e6) {
          const _0x34529d = _0x7bc2e6.apply(_0x5bcf34, arguments);
          _0x7bc2e6 = null;
          return _0x34529d;
        }
      } : function () {};
      _0x1e6c51 = false;
      return _0x50f28c;
    };
  }();
  const _0x58ace3 = _0x50aaac(this, function () {
    const _0x2378f0 = function () {};
    const _0x2b3f92 = function () {
      let _0xb6cdd0;
      try {
        _0xb6cdd0 = Function("return (function() {}.constructor(\"return this\")( ));")();
      } catch (_0x2908b3) {
        _0xb6cdd0 = window;
      }
      return _0xb6cdd0;
    };
    const _0x55356e = _0x2b3f92();
    if (!_0x55356e.console) {
      _0x55356e.console = function (_0xfdb7b6) {
        const _0x5f5480 = {
          log: _0xfdb7b6,
          warn: _0xfdb7b6,
          debug: _0xfdb7b6,
          info: _0xfdb7b6,
          error: _0xfdb7b6,
          exception: _0xfdb7b6,
          table: _0xfdb7b6,
          trace: _0xfdb7b6
        };
        return _0x5f5480;
      }(_0x2378f0);
    } else {
      _0x55356e.console.log = _0x2378f0;
      _0x55356e.console.warn = _0x2378f0;
      _0x55356e.console.debug = _0x2378f0;
      _0x55356e.console.info = _0x2378f0;
      _0x55356e.console.error = _0x2378f0;
      _0x55356e.console.exception = _0x2378f0;
      _0x55356e.console.table = _0x2378f0;
      _0x55356e.console.trace = _0x2378f0;
    }
  });
  _0x58ace3();
  token = await checktoken();
  await $.wait(2000);
  tokens = JSON.parse(token);
  log("\n\n=============================================    \n脚本执行 - 北京时间(UTC+8)：" + new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 28800000).toLocaleString() + " \n=============================================\n");
  log("\n=================== 共找到 " + tokens.length + " 个账号 ===================");
  for (let _0x22600e = 0; _0x22600e < tokens.length; _0x22600e++) {
    let _0x69d7f7 = _0x22600e + 1;
    if (_0x69d7f7 > 1 && wait == 0) {
      log("**********休息15s，防止黑IP**********");
      await $.wait(15000);
    }
    log("\n========= 开始【第 " + _0x69d7f7 + " 个账号】=========\n");
    data = tokens[_0x22600e];
    userToken = data.userToken;
    refreshToken = data.refreshToken;
    mark = data.mark;
    log("运行用户：" + mark);
    refreshBack = 0;
    log("开始刷新token");
    await refresh();
    await $.wait(2000);
    if (refreshBack > 0) {
      await set_tokens(_0x22600e, tokens, userToken, refreshToken);
      await $.wait(2000);
      receiveTaskScoreBack = 0;
      log("===========去做任务===========");
      log("去充电...");
      await receiveTaskScore("6", "1");
      await $.wait(2000);
      await receiveTaskScore("6", "1");
      await $.wait(2000);
      log("去看视频赚积分...");
      for (let _0x1c8bad = 0; _0x1c8bad < 10; _0x1c8bad++) {
        await receiveTaskScore("7", "1");
        await $.wait(2000);
      }
      log("去购买安心充电卡...");
      await receiveTaskScore("8", "1");
      await $.wait(2000);
      await receiveTaskScore("8", "1");
      await $.wait(2000);
      log("去购买安心充电月卡...");
      await receiveTaskScore("9", "1");
      await $.wait(2000);
      log("去购买安心充电年卡...");
      await receiveTaskScore("10", "1");
      await $.wait(2000);
      log("===========去领取积分===========");
      await receiveTaskScore("6", "2");
      await $.wait(2000);
      await receiveTaskScore("8", "2");
      await $.wait(2000);
      await receiveTaskScore("9", "2");
      await $.wait(2000);
      await receiveTaskScore("10", "2");
      await $.wait(2000);
      log("===========去兑换充电金===========");
      //log("开始兑换1元充电金...");
      //await exchangeProduct("1", "1");
      //await $.wait(2000);
      log("开始兑换5元充电金...");
      await exchangeProduct("2", "2");
      await $.wait(2000);
    }
  }
}
async function refresh() {
  const _0x2b2eff = {
    refreshToken: refreshToken
  };
  const _0x4faa00 = {
    method: "POST",
    url: "https://appapi.lvcchong.com/accessToken/refresh/",
    headers: {},
    formData: _0x2b2eff
  };
  _0x4faa00.headers.token = userToken;
  _0x4faa00.headers["content-type"] = "multipart/form-data; boundary=---011000010111000001101001";
  request(_0x4faa00, function (_0x445c54, _0x34cf6d, _0x57985d) {
    let _0x3eb802 = JSON.parse(_0x57985d);
    if (_0x3eb802.code == 200) {
      userToken = _0x3eb802.data.userToken;
      refreshToken = _0x3eb802.data.refreshToken;
      refreshBack = 1;
    } else {
      log("❌ 刷新失败，" + JSON.stringify(_0x3eb802));
      refreshBack = 0;
    }
  });
}
async function receiveTaskScore(_0x5c1057, _0x27f22b) {
  const _0x580aa5 = {
    taskType: _0x5c1057,
    status: _0x27f22b,
    isApp: "1"
  };
  const _0x23a01e = {
    method: "POST",
    url: "https://appapi.lvcchong.com/appBaseApi/scoreUser/task/receiveTaskScore",
    headers: {},
    formData: _0x580aa5
  };
  _0x23a01e.headers.token = userToken;
  _0x23a01e.headers["content-type"] = "multipart/form-data; boundary=---011000010111000001101001";

  return new Promise((resolve) => {
    request(_0x23a01e, function (_0x4b7fb6, _0x148c95, _0x26028e) {
      try {
        // 检查是否是HTML错误页面
        if (typeof _0x26028e === 'string' && _0x26028e.startsWith('<html>')) {
          log("❌ 服务器返回错误页面，可能是接口异常");
          resolve(false);
          return;
        }

        let _0x56f0a1 = JSON.parse(_0x26028e);
        if (_0x56f0a1.code == 200) {
          userScore = _0x56f0a1.data.userScore;
          log("任务完成成功，当前积分：" + userScore);
          resolve(true);
        } else {
          log("❌ 任务运行失败，" + JSON.stringify(_0x56f0a1));
          resolve(false);
        }
      } catch (e) {
        log("❌ 解析响应失败，返回数据：" + _0x26028e);
        resolve(false);
      }
    });
  });
}
async function exchangeProduct(_0x4e2b7f, _0x527208) {
  const _0x36de85 = {
    token: userToken,
    "content-type": "multipart/form-data; boundary=---011000010111000001101001"
  };
  const _0x2c7d59 = {
    productId: _0x4e2b7f,
    num: "1",
    orderSource: "3"
  };
  const _0x52143d = {
    method: "POST",
    url: "https://appapi.lvcchong.com/appBaseApi/scoreUser/exchangeProduct",
    headers: _0x36de85,
    formData: _0x2c7d59
  };
  request(_0x52143d, function (_0x255ade, _0x5f3d97, _0x6ef074) {
    let _0x3947fd = JSON.parse(_0x6ef074);
    if (_0x3947fd.code == 200) {
      datacode = _0x3947fd.data;
      log("兑换成功，下单编号：" + datacode);
      log("去兑换成余额");
      mun = _0x527208;
      balance(mun);
  } else {
      log("❌ 兑换失败，" + JSON.stringify(_0x3947fd));
    }
  });
}
async function balance(_0x555f02) {
  const _0x4213dd = {
    num: _0x555f02,
    initialEntrance: "2"
  };
  const _0x5a4176 = {
    method: "POST",
    url: "https://appapi.lvcchong.com/appBaseApi/chargeGold/exchange/balance",
    headers: {},
    formData: _0x4213dd
  };
  _0x5a4176.headers.token = userToken;
  _0x5a4176.headers["content-type"] = "multipart/form-data; boundary=---011000010111000001101001";
  request(_0x5a4176, function (_0x24a33e, _0x20b7ad, _0x5e7c6a) {
    let _0x8c2ae = JSON.parse(_0x5e7c6a);
    if (_0x8c2ae.code == 200) {
      log("兑换余额成功");
    } else {
      log("❌ 兑换余额失败，" + JSON.stringify(_0x8c2ae));
    }
  });
}
async function checktoken() {
  fs.open(path, "r+", function (_0x321477, _0x5d3b94) {
    if (_0x321477) {
      console.error("找不到lcc_tokens.json文件,请手动创建并填写token...");
      return;
    }
    console.log("找到lcc_tokens.json文件，去做任务...");
    var _0xcd0806 = fs.readFileSync(path);
    token = _0xcd0806.toString();
    return token;
  });
}
async function set_tokens(_0x28c836, _0x101d5a, _0x20b8e7, _0x1fb952) {
  let _0x1b54f4 = _0x101d5a;
  const _0x122e00 = {
    mark: mark,
    userToken: _0x20b8e7,
    refreshToken: _0x1fb952
  };
  _0x1b54f4[_0x28c836] = _0x122e00;
  fs.mkdir(path, function (_0x5c33c5) {
    if (_0x5c33c5) {
      console.log("找到lcc_tokens.json文件");
    } else {
      console.log("未找到lcc_tokens.json文件...");
    }
  });
  fs.writeFile(path, JSON.stringify(_0x1b54f4), function (_0x37084c) {
    if (_0x37084c) {
      return console.error(_0x37084c);
    }
    console.log("更新token成功");
  });
}
main();
function Env(_0x998561, _0x34db6f) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class _0x331d40 {
    constructor(_0x1eb82a) {
      this.env = _0x1eb82a;
    }
    send(_0x1e7a55, _0x3c3b26 = "GET") {
      _0x1e7a55 = "string" == typeof _0x1e7a55 ? {
        url: _0x1e7a55
      } : _0x1e7a55;
      let _0x579300 = this.get;
      "POST" === _0x3c3b26 && (_0x579300 = this.post);
      return new Promise((_0x87cf91, _0x2b676c) => {
        _0x579300.call(this, _0x1e7a55, (_0x4634dc, _0x5a3b12, _0x4684b8) => {
          _0x4634dc ? _0x2b676c(_0x4634dc) : _0x87cf91(_0x5a3b12);
        });
      });
    }
    get(_0x2d9e6f) {
      return this.send.call(this.env, _0x2d9e6f);
    }
    post(_0x6e4614) {
      return this.send.call(this.env, _0x6e4614, "POST");
    }
  }
  return new class {
    constructor(_0x4b5c33, _0xfaf8bf) {
      this.name = _0x4b5c33;
      this.http = new _0x331d40(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0xfaf8bf);
      this.log("", "🔔" + this.name + ", 开始!");
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    toObj(_0x185d6b, _0x483d04 = null) {
      try {
        return JSON.parse(_0x185d6b);
      } catch {
        return _0x483d04;
      }
    }
    toStr(_0x44ba67, _0x4b3b57 = null) {
      try {
        return JSON.stringify(_0x44ba67);
      } catch {
        return _0x4b3b57;
      }
    }
    getjson(_0x6c0435, _0x29706a) {
      let _0x836385 = _0x29706a;
      const _0xf3425 = this.getdata(_0x6c0435);
      if (_0xf3425) {
        try {
          _0x836385 = JSON.parse(this.getdata(_0x6c0435));
        } catch {}
      }
      return _0x836385;
    }
    setjson(_0x3b5f57, _0x52bddf) {
      try {
        return this.setdata(JSON.stringify(_0x3b5f57), _0x52bddf);
      } catch {
        return !1;
      }
    }
    getScript(_0x31032e) {
      return new Promise(_0x19c552 => {
        const _0x53ae32 = {
          url: _0x31032e
        };
        this.get(_0x53ae32, (_0x516dc9, _0x191879, _0x217b38) => _0x19c552(_0x217b38));
      });
    }
    runScript(_0x4f596c, _0xc32588) {
      return new Promise(_0x3b1677 => {
        let _0xd136dd = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0xd136dd = _0xd136dd ? _0xd136dd.replace(/\n/g, "").trim() : _0xd136dd;
        let _0x49a79a = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x49a79a = _0x49a79a ? 1 * _0x49a79a : 20;
        _0x49a79a = _0xc32588 && _0xc32588.timeout ? _0xc32588.timeout : _0x49a79a;
        const _0x2002a8 = {
          script_text: _0x4f596c,
          mock_type: "cron",
          timeout: _0x49a79a
        };
        const [_0x46fba9, _0x42c156] = _0xd136dd.split("@"),
          _0x571f6a = {
            url: "http://" + _0x42c156 + "/v1/scripting/evaluate",
            body: _0x2002a8,
            headers: {
              "X-Key": _0x46fba9,
              Accept: "*/*"
            }
          };
        this.post(_0x571f6a, (_0x420c01, _0x424bf9, _0x554447) => _0x3b1677(_0x554447));
      }).catch(_0x254aa7 => this.logErr(_0x254aa7));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x577fb5 = this.path.resolve(this.dataFile),
          _0x18f6ce = this.path.resolve(process.cwd(), this.dataFile),
          _0x1e1c42 = this.fs.existsSync(_0x577fb5),
          _0x4a45a9 = !_0x1e1c42 && this.fs.existsSync(_0x18f6ce);
        if (!_0x1e1c42 && !_0x4a45a9) {
          return {};
        }
        {
          const _0x3f6e97 = _0x1e1c42 ? _0x577fb5 : _0x18f6ce;
          try {
            return JSON.parse(this.fs.readFileSync(_0x3f6e97));
          } catch (_0x1f33b1) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x3e40a6 = this.path.resolve(this.dataFile),
          _0x3f73ff = this.path.resolve(process.cwd(), this.dataFile),
          _0x1e5e47 = this.fs.existsSync(_0x3e40a6),
          _0x60335 = !_0x1e5e47 && this.fs.existsSync(_0x3f73ff),
          _0x541136 = JSON.stringify(this.data);
        _0x1e5e47 ? this.fs.writeFileSync(_0x3e40a6, _0x541136) : _0x60335 ? this.fs.writeFileSync(_0x3f73ff, _0x541136) : this.fs.writeFileSync(_0x3e40a6, _0x541136);
      }
    }
    lodash_get(_0x2222a1, _0x2167d5, _0xfdcbfc) {
      const _0x5aaa8d = _0x2167d5.replace(/\[(\d+)\]/g, ".$1").split(".");
      let _0x1d4eef = _0x2222a1;
      for (const _0x1ea64a of _0x5aaa8d) if (_0x1d4eef = Object(_0x1d4eef)[_0x1ea64a], void 0 === _0x1d4eef) {
        return _0xfdcbfc;
      }
      return _0x1d4eef;
    }
                  statusCode: _0x46b7a0,
              statusCode: _0xad015,
              headers: _0x107bff,
              body: _0x2e36f3
            } = _0x25ee56;
            const _0x154291 = {
              status: _0x46b7a0,
              statusCode: _0xad015,
              headers: _0x107bff,
              body: _0x2e36f3
            };
            _0x5c6392(null, _0x154291, _0x2e36f3);
          }, _0x1c97d2 => _0x5c6392(_0x1c97d2));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0x38127d);
            const {
              url: _0x1b04ff,
              ..._0x50d576
            } = _0x38127d;
            this.got.post(_0x1b04ff, _0x50d576).then(_0x5136dd => {
              const {
                statusCode: _0x468073,
                statusCode: _0x4fafcd,
                headers: _0x519ae0,
                body: _0x1c240f
              } = _0x5136dd;
              const _0x1fc301 = {
                status: _0x468073,
                statusCode: _0x4fafcd,
                headers: _0x519ae0,
                body: _0x1c240f
              };
              _0x5c6392(null, _0x1fc301, _0x1c240f);
            }, _0x47c192 => {
              const {
                message: _0x27ee81,
                response: _0x48736e
              } = _0x47c192;
              _0x5c6392(_0x27ee81, _0x48736e, _0x48736e && _0x48736e.body);
            });
          }
        }
      }
    }
    time(_0x537300, _0x4df7a8 = null) {
      const _0x4e37cb = _0x4df7a8 ? new Date(_0x4df7a8) : new Date();
      const _0x36fc13 = {
        "M+": _0x4e37cb.getMonth() + 1,
        "d+": _0x4e37cb.getDate(),
        "H+": _0x4e37cb.getHours(),
        "m+": _0x4e37cb.getMinutes(),
        "s+": _0x4e37cb.getSeconds(),
        "q+": Math.floor((_0x4e37cb.getMonth() + 3) / 3),
        S: _0x4e37cb.getMilliseconds()
      };
      /(y+)/.test(_0x537300) && (_0x537300 = _0x537300.replace(RegExp.$1, (_0x4e37cb.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x449935 in _0x36fc13) new RegExp("(" + _0x449935 + ")").test(_0x537300) && (_0x537300 = _0x537300.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x36fc13[_0x449935] : ("00" + _0x36fc13[_0x449935]).substr(("" + _0x36fc13[_0x449935]).length)));
      return _0x537300;
    }
    msg(_0x5e186d = _0x998561, _0x3def69 = "", _0x360ebc = "", _0xeae89) {
      const _0x54cae0 = _0x3de8e1 => {
        if (!_0x3de8e1) {
          return _0x3de8e1;
        }
        if ("string" == typeof _0x3de8e1) {
          return this.isLoon() ? _0x3de8e1 : this.isQuanX() ? {
            "open-url": _0x3de8e1
          } : this.isSurge() ? {
            url: _0x3de8e1
          } : void 0;
        }
        if ("object" == typeof _0x3de8e1) {
          if (this.isLoon()) {
            let _0x3b469d = _0x3de8e1.openUrl || _0x3de8e1.url || _0x3de8e1["open-url"],
              _0x1dafc4 = _0x3de8e1.mediaUrl || _0x3de8e1["media-url"];
            const _0x56544e = {
              openUrl: _0x3b469d,
              mediaUrl: _0x1dafc4
            };
            return _0x56544e;
          }
          if (this.isQuanX()) {
            let _0x63cb54 = _0x3de8e1["open-url"] || _0x3de8e1.url || _0x3de8e1.openUrl,
              _0x5a2320 = _0x3de8e1["media-url"] || _0x3de8e1.mediaUrl;
            const _0x580fa6 = {
              "open-url": _0x63cb54,
              "media-url": _0x5a2320
            };
            return _0x580fa6;
          }
          if (this.isSurge()) {
            let _0x51873c = _0x3de8e1.url || _0x3de8e1.openUrl || _0x3de8e1["open-url"];
            const _0x3f0846 = {
              url: _0x51873c
            };
            return _0x3f0846;
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x5e186d, _0x3def69, _0x360ebc, _0x54cae0(_0xeae89)) : this.isQuanX() && $notify(_0x5e186d, _0x3def69, _0x360ebc, _0x54cae0(_0xeae89))), !this.isMuteLog) {
        let _0x108fb3 = ["", "==============📣系统通知📣=============="];
        _0x108fb3.push(_0x5e186d);
        _0x3def69 && _0x108fb3.push(_0x3def69);
        _0x360ebc && _0x108fb3.push(_0x360ebc);
        console.log(_0x108fb3.join("\n"));
        this.logs = this.logs.concat(_0x108fb3);
      }
    }
    log(..._0x286efb) {
      _0x286efb.length > 0 && (this.logs = [...this.logs, ..._0x286efb]);
      console.log(_0x286efb.join(this.logSeparator));
    }
    logErr(_0x3bf5d3, _0x5c44af) {
      const _0x53fcc3 = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      _0x53fcc3 ? this.log("", "❗️" + this.name + ", 错误!", _0x3bf5d3.stack) : this.log("", "❗️" + this.name + ", 错误!", _0x3bf5d3);
    }
    wait(_0x512a81) {
      return new Promise(_0x125717 => setTimeout(_0x125717, _0x512a81));
    }
    done(_0x3d9b4f = {}) {
      const _0x2d3255 = new Date().getTime(),
        _0x53b4dd = (_0x2d3255 - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束! 🕛 " + _0x53b4dd + " 秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0x3d9b4f);
    }
  }(_0x998561, _0x34db6f);
}
