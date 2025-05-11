"uses strict";
import test from "tap";
import fs from "fs";
import { render_svg } from "svgrast";

test.test("test uri", (t) => {
    let output = "/tmp/car.png";
    let uri = "https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/car.svg"
    return render_svg({
        uri, output
    }).then(() => {
        t.ok(fs.existsSync(output));
        t.end();
    }).catch(() => {
        t.fail(`failed ${output} <- ${uri}`);
        t.end();
    });
});

test.test("test path", (t) => {
    let dest = "/tmp/E8_graph.jpg";
    return render_svg({
        path: "test/E8_graph.svg",
        output: dest,
    }).then(() => {
        t.ok(fs.existsSync(dest));
        t.end();
    });
});

test.test("test no uri, path", async (t) => {
    let dest = "/tmp/car.png";
    let p = render_svg({
        output: dest,
    });
    await t.rejects(p);
});

test.test("test blob", (t) => {
    return render_svg({
        type: 'webp',
        path: "test/E8_graph.svg",
    }).then((blob) => {
        t.same(typeof blob, 'object', 'blob');
        fs.writeFileSync('/tmp/E8_graph.webp', blob);
    });
});
