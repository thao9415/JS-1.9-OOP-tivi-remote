function Tivi(status,volume,channel) {
    this.status=status;
    this.volume=volume;
    this.channel=channel;
    this.changeChannel=function (newChannel) {
        this.channel=newChannel;
    }
    this.volumeUp=function () {
        this.volume++
    }
    this.volumeDown=function () {
        this.volume--
    }
}
function Remote(status) {
    this.status=status;
    this.moveChannel=function (tv,channel) {
        tv.changeChannel(channel)
    };
    this.volumeUpp=function (tv) {
        tv.volumeUp();
    };
    this.volumeDownn=function (tv) {
        tv.volumeDown();
    };
}
let tivi=new Tivi("on",20,"vtv1")
let remote=new Remote("on");
