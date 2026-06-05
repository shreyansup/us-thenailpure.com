import {
    aM as t,
    h as i,
    W as a,
    ae as c,
    aS as l
} from "./CXxYSqOH.js";
import {
    F as f
} from "./npO4ghLh.js";
const S = (e, n) => {
        try {
            t(`webinar_session_${e}`, JSON.stringify(n))
        } catch {}
    },
    m = async ({
        webinarId: e,
        locationId: n,
        sessionId: r
    }) => {
        try {
            return (await f.getWebinarSession({
                webinarId: e,
                locationId: n,
                sessionId: r
            })).session
        } catch {
            return null
        }
    },
    v = e => JSON.parse(l(`webinar_session_${e}`) || "{}");
async function _(e) {
    const n = i();
    let r = a("sp_referer").value;
    const s = e ? .fingerprint || a("msgsndr_id").value || "";
    if (r) try {
        r = decodeURIComponent(r)
    } catch {}
    const o = {
        domain: n.value.funnelDomain,
        fullUrl: window.location.href,
        pageUrl: n.value.pageUrl,
        eventType: "webinar_attendee",
        fingerprint: s,
        sp_referer: r,
        webinarSessionId: e ? ._id
    };
    await c(o, !0)
}
const b = e => {
    localStorage.removeItem(`webinar_session_${e}`)
};
export {
    _ as a, m as f, v as g, b as r, S as s
};