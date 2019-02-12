export function getCode() {
    const search = window.location.search; //"?"号(CGI参数)之后的字符串.
    let searchParam = search.split('?')[1]
    let cut = []
    cut = searchParam.split('&')
    let data = {}
    for (let i = 0; i < cut.length; i++) {
        const e = cut[i];
        let value = e.split('=')[1]; //将数组中的元素作为json对象的值
        let key = e.split('=')[0]; //选取一个属性作为新的json对象的key
        data[key] = value;

    }
    return data["code"]
};

export function getAccessToken(x) {
    console.log(x);
    const p = {
        appid: "wx90939d48f44c5ea3",
        secret: "841bb230b885106c92f76c654a1e96f9",
        code: x,
        grant_type: "authorization_code"
    }
    axios.get('https://api.weixin.qq.com/sns/oauth2/access_token', p)
        .then((response) => {
            console.log(response);
            return response
        })
        .catch((error) => {
            console.log(error);

        });
}

export function getRefreshToken(x) {
    const p = {
        appid: "wx90939d48f44c5ea3",
        grant_type: x['grant_type'],
        refresh_token: x['refresh_token'],
    }
    axios.get('https://api.weixin.qq.com/sns/oauth2/refresh_token', p)
        .then((response) => {
            console.log(response);
            return response
        })
        .catch((error) => {
            console.log(error);

        });
}

export function getUserInfo(x) {
    const p = {
        lang: "zh_CN ",
        access_token: x['access_token'],
        openid: x['openid'],
    }
    axios.get(' https://api.weixin.qq.com/sns/userinfo', p)
        .then((response) => {
            console.log(response);
            return response
        })
        .catch((error) => {
            console.log(error);

        });
}


export const getPromise = x => new Promise((resolve, reject) => {
    console.log(x);
    // setTimeout(() => {
    //     console.log(x);

    // }, 100)
});