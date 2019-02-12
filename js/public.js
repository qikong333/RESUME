export function closeRoule() {
    document.getElementById("closeRoule").addEventListener("click", () => {
        let x = document.getElementsByClassName('bg')[0]
        x.style.display = 'none';
    })

}

export function openRoule() {


    document.getElementById("openRoule").addEventListener("click", () => {
        let x = document.getElementsByClassName('bg')[0]
        x.style.display = 'block';

    })


}

export const url = "https://121.40.188.31:8080/";

// export const

// 正式
// export const appid = "wx90939d48f44c5ea3";
// export const secret = "841bb230b885106c92f76c654a1e96f9";

// 测试
export const appid = "wxde435350a9540ab9";
export const secret = "95ee82a24464b3fd5b0e525af3a146b0";