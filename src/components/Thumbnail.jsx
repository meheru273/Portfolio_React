import React from "react";

/* ------------------------------------------------------------------ *
 * Schematic thumbnails.                                              *
 *                                                                    *
 * Every entry gets a small drawing of what it actually is — the      *
 * service topology, the braille cells, the AES datapath — rather      *
 * than a stock photo. They are inline SVG so they stay sharp, weigh   *
 * nothing, and inherit `--cat` from the card, which means each one    *
 * is already the right colour for its category.                       *
 * ------------------------------------------------------------------ */

const ACCENT = "var(--cat, var(--c-accent))";
const LINE = "var(--c-line)";
const FAINT = "var(--c-faint)";

/** Muted structural rectangle. */
function Box({ x, y, w, h, r = 3, accent = false, fill }) {
  return (
    <rect
      x={x}
      y={y}
      width={w}
      height={h}
      rx={r}
      fill={fill ?? (accent ? ACCENT : "var(--c-raised)")}
      fillOpacity={accent ? 0.16 : 1}
      stroke={accent ? ACCENT : LINE}
      strokeWidth="1.4"
    />
  );
}

/** Short horizontal bar standing in for a line of text. */
function Bar({ x, y, w, h = 3, accent = false, opacity = 1 }) {
  return (
    <rect
      x={x}
      y={y}
      width={w}
      height={h}
      rx={h / 2}
      fill={accent ? ACCENT : FAINT}
      opacity={accent ? 0.75 : opacity * 0.4}
    />
  );
}

function Link({ x1, y1, x2, y2, accent = false, dashed = false }) {
  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke={accent ? ACCENT : LINE}
      strokeWidth={accent ? 1.6 : 1.2}
      strokeDasharray={dashed ? "3 3" : undefined}
      strokeLinecap="round"
    />
  );
}

/* ---------------------------------------------------------------- Diagrams */

/** Gateway fanning out to services, each with its own database. */
function Microservices() {
  const rows = [22, 52, 82, 112];
  return (
    <g>
      <Box x={10} y={58} w={32} h={30} />
      <Bar x={16} y={68} w={20} />
      <Bar x={16} y={75} w={13} opacity={0.7} />

      <Box x={62} y={52} w={28} h={42} accent />
      <Bar x={68} y={64} w={16} accent />
      <Bar x={68} y={71} w={16} accent />
      <Bar x={68} y={78} w={10} accent />

      <Link x1={42} y1={73} x2={62} y2={73} accent />

      {rows.map((y) => (
        <g key={y}>
          <Link x1={90} y1={73} x2={116} y2={y + 11} />
          <Box x={116} y={y} w={38} h={22} />
          <Bar x={122} y={y + 7} w={20} />
          <Bar x={122} y={y + 13} w={12} opacity={0.6} />
          <ellipse
            cx={175}
            cy={y + 11}
            rx={9}
            ry={3.5}
            fill={ACCENT}
            fillOpacity={0.2}
            stroke={ACCENT}
            strokeWidth="1.1"
          />
          <path
            d={`M166 ${y + 11} v6 a9 3.5 0 0 0 18 0 v-6`}
            fill="none"
            stroke={ACCENT}
            strokeWidth="1.1"
          />
          <Link x1={154} y1={y + 11} x2={166} y2={y + 11} />
        </g>
      ))}
    </g>
  );
}

/** Query → vector index → agent → streamed tokens. */
function Rag() {
  const cells = [];
  for (let r = 0; r < 4; r += 1) {
    for (let c = 0; c < 4; c += 1) {
      const hot = (r * 4 + c) % 5 === 0;
      cells.push(
        <rect
          key={`${r}-${c}`}
          x={66 + c * 11}
          y={26 + r * 11}
          width={8}
          height={8}
          rx={1.5}
          fill={ACCENT}
          fillOpacity={hot ? 0.75 : 0.18}
        />,
      );
    }
  }

  return (
    <g>
      <path
        d="M10 34 h36 a4 4 0 0 1 4 4 v18 a4 4 0 0 1-4 4 H22 l-6 7 v-7 h-6 a4 4 0 0 1-4-4 V38 a4 4 0 0 1 4-4 z"
        fill="var(--c-raised)"
        stroke={LINE}
        strokeWidth="1.4"
      />
      <Bar x={14} y={42} w={30} />
      <Bar x={14} y={50} w={20} opacity={0.6} />

      <rect
        x={62}
        y={22}
        width={52}
        height={52}
        rx={5}
        fill="none"
        stroke={LINE}
        strokeWidth="1.4"
      />
      {cells}
      <Link x1={50} y1={48} x2={62} y2={48} accent />

      <path
        d="M132 32 l22-11 22 11 v26 l-22 11 -22-11 z"
        fill={ACCENT}
        fillOpacity={0.16}
        stroke={ACCENT}
        strokeWidth="1.4"
      />
      <circle cx={154} cy={45} r={5} fill={ACCENT} fillOpacity={0.7} />
      <Link x1={114} y1={48} x2={132} y2={45} accent />

      {[100, 111, 122, 133].map((y, i) => (
        <Bar
          key={y}
          x={30}
          y={y}
          w={[120, 92, 134, 64][i]}
          h={4}
          accent={i === 0}
          opacity={0.9 - i * 0.15}
        />
      ))}
      <circle cx={22} cy={102} r={4} fill={ACCENT} fillOpacity={0.7} />
      <circle cx={22} cy={124} r={4} fill={ACCENT} fillOpacity={0.25} />
    </g>
  );
}

/** Braille cells under detection boxes, resolving into text. */
function Braille() {
  const cellDots = [
    [1, 0, 1, 1, 0, 0],
    [1, 1, 0, 1, 0, 1],
    [1, 0, 0, 1, 1, 0],
    [1, 1, 1, 0, 0, 1],
  ];

  return (
    <g>
      {cellDots.map((dots, ci) => {
        const ox = 18 + ci * 44;
        return (
          <g key={ci}>
            <rect
              x={ox - 8}
              y={16}
              width={34}
              height={54}
              rx={3}
              fill={ACCENT}
              fillOpacity={ci % 2 === 0 ? 0.1 : 0}
              stroke={ACCENT}
              strokeWidth="1.3"
              strokeDasharray={ci % 2 === 0 ? undefined : "3 3"}
            />
            {dots.map((on, di) => (
              <circle
                key={di}
                cx={ox + (di % 2) * 17}
                cy={27 + Math.floor(di / 2) * 16}
                r={5}
                fill={on ? "var(--c-ink)" : "none"}
                fillOpacity={on ? 0.75 : 0}
                stroke={on ? "none" : LINE}
                strokeWidth="1.2"
              />
            ))}
          </g>
        );
      })}

      <path
        d="M100 80 v10"
        stroke={ACCENT}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M96 86 l4 5 4-5"
        fill="none"
        stroke={ACCENT}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <Box x={22} y={98} w={156} h={0} />
      <Bar x={22} y={100} w={120} h={5} accent />
      <Bar x={22} y={112} w={156} h={5} />
      <Bar x={22} y={124} w={96} h={5} opacity={0.7} />
    </g>
  );
}

/** Controller above a mesh, with one computed path lit up. */
function Sdn() {
  const nodes = [
    [30, 76],
    [62, 54],
    [62, 104],
    [100, 78],
    [138, 52],
    [138, 106],
    [172, 78],
  ];
  const edges = [
    [0, 1],
    [0, 2],
    [1, 3],
    [2, 3],
    [3, 4],
    [3, 5],
    [4, 6],
    [5, 6],
    [1, 4],
  ];
  const litPath = [0, 1, 3, 4, 6];

  const isLit = (a, b) => {
    for (let i = 0; i < litPath.length - 1; i += 1) {
      if (
        (litPath[i] === a && litPath[i + 1] === b) ||
        (litPath[i] === b && litPath[i + 1] === a)
      )
        return true;
    }
    return false;
  };

  return (
    <g>
      <Box x={64} y={10} w={72} h={20} accent />
      <Bar x={72} y={18} w={30} accent />
      <Bar x={106} y={18} w={12} accent />
      {[30, 62, 138, 172].map((x, i) => (
        <Link key={x} x1={100} y1={30} x2={x} y2={[76, 54, 52, 78][i]} dashed />
      ))}

      {edges.map(([a, b]) => (
        <Link
          key={`${a}-${b}`}
          x1={nodes[a][0]}
          y1={nodes[a][1]}
          x2={nodes[b][0]}
          y2={nodes[b][1]}
          accent={isLit(a, b)}
        />
      ))}
      {nodes.map(([x, y], i) => {
        const lit = litPath.includes(i);
        return (
          <circle
            key={i}
            cx={x}
            cy={y}
            r={8}
            fill={lit ? ACCENT : "var(--c-raised)"}
            fillOpacity={lit ? 0.8 : 1}
            stroke={lit ? ACCENT : LINE}
            strokeWidth="1.4"
          />
        );
      })}
    </g>
  );
}

/** AES state matrix inside a chip package, plain block in, cipher block out. */
function Fpga() {
  const cells = [];
  for (let r = 0; r < 4; r += 1) {
    for (let c = 0; c < 4; c += 1) {
      cells.push(
        <rect
          key={`${r}-${c}`}
          x={82 + c * 10}
          y={50 + r * 10}
          width={8}
          height={8}
          rx={1.5}
          fill={ACCENT}
          fillOpacity={0.15 + ((r + c) % 4) * 0.18}
        />,
      );
    }
  }

  return (
    <g>
      {/* Package + pins */}
      <rect
        x={68}
        y={36}
        width={68}
        height={68}
        rx={6}
        fill="var(--c-raised)"
        stroke={ACCENT}
        strokeWidth="1.6"
      />
      {[46, 58, 70, 82, 94].map((y) => (
        <g key={y}>
          <Link x1={60} y1={y} x2={68} y2={y} />
          <Link x1={136} y1={y} x2={144} y2={y} />
        </g>
      ))}
      {[80, 92, 104, 116].map((x) => (
        <g key={x}>
          <Link x1={x} y1={28} x2={x} y2={36} />
          <Link x1={x} y1={104} x2={x} y2={112} />
        </g>
      ))}
      {cells}

      {/* Plaintext in, ciphertext out */}
      <Box x={10} y={56} w={30} h={30} />
      <Bar x={16} y={66} w={18} />
      <Bar x={16} y={74} w={11} opacity={0.7} />
      <Link x1={40} y1={71} x2={60} y2={71} accent />

      <Box x={164} y={56} w={30} h={30} accent />
      {[0, 1, 2, 3].map((i) => (
        <rect
          key={i}
          x={170 + (i % 2) * 9}
          y={62 + Math.floor(i / 2) * 9}
          width={7}
          height={7}
          rx={1}
          fill={ACCENT}
          fillOpacity={0.35 + i * 0.15}
        />
      ))}

      <path
        d="M52 118 h96"
        stroke={LINE}
        strokeWidth="1.2"
        strokeDasharray="4 4"
      />
      <text
        x={100}
        y={132}
        textAnchor="middle"
        fontSize="10"
        fill={FAINT}
        fontFamily="ui-monospace, monospace"
      >
        AES-128
      </text>
    </g>
  );
}

/** Related tables joined by keys. */
function Schema() {
  const tables = [
    { x: 12, y: 22, rows: 4 },
    { x: 78, y: 62, rows: 5 },
    { x: 142, y: 20, rows: 3 },
  ];
  return (
    <g>
      <Link x1={62} y1={44} x2={78} y2={78} accent />
      <Link x1={128} y1={78} x2={142} y2={44} accent />

      {tables.map((t, i) => (
        <g key={i}>
          <rect
            x={t.x}
            y={t.y}
            width={50}
            height={16 + t.rows * 11}
            rx={4}
            fill="var(--c-raised)"
            stroke={LINE}
            strokeWidth="1.4"
          />
          <path
            d={`M${t.x} ${t.y + 4} a4 4 0 0 1 4-4 h42 a4 4 0 0 1 4 4 v11 H${t.x} z`}
            fill={ACCENT}
            fillOpacity={0.55}
          />
          {Array.from({ length: t.rows }).map((_, r) => (
            <g key={r}>
              <Bar
                x={t.x + 7}
                y={t.y + 22 + r * 11}
                w={r === 0 ? 14 : 26}
                accent={r === 0}
              />
              {r === 0 ? (
                <circle
                  cx={t.x + 43}
                  cy={t.y + 23.5}
                  r={2.5}
                  fill={ACCENT}
                  fillOpacity={0.7}
                />
              ) : null}
            </g>
          ))}
        </g>
      ))}
    </g>
  );
}

/** Admin dashboard: nav rail, stat tiles, a bar chart. */
function Dashboard() {
  const bars = [26, 40, 18, 48, 33, 44];
  return (
    <g>
      <rect
        x={10}
        y={16}
        width={180}
        height={118}
        rx={6}
        fill="var(--c-raised)"
        stroke={LINE}
        strokeWidth="1.4"
      />
      <path
        d="M10 22 a6 6 0 0 1 6-6 h168 a6 6 0 0 1 6 6 v8 H10 z"
        fill={ACCENT}
        fillOpacity={0.14}
      />
      {[18, 26, 34].map((cx) => (
        <circle key={cx} cx={cx} cy={23} r={2.5} fill={FAINT} opacity={0.5} />
      ))}

      <rect
        x={10}
        y={30}
        width={34}
        height={104}
        fill={ACCENT}
        fillOpacity={0.07}
      />
      {[42, 56, 70, 84].map((y, i) => (
        <g key={y}>
          <rect
            x={17}
            y={y}
            width={6}
            height={6}
            rx={1.5}
            fill={ACCENT}
            fillOpacity={i === 0 ? 0.8 : 0.3}
          />
          <Bar x={27} y={y + 1.5} w={11} accent={i === 0} />
        </g>
      ))}

      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect
            x={54 + i * 46}
            y={40}
            width={38}
            height={26}
            rx={4}
            fill={ACCENT}
            fillOpacity={0.1}
            stroke={ACCENT}
            strokeWidth="1"
            strokeOpacity={0.35}
          />
          <Bar x={60 + i * 46} y={46} w={14} />
          <Bar x={60 + i * 46} y={55} w={22} h={4} accent />
        </g>
      ))}

      {bars.map((h, i) => (
        <rect
          key={i}
          x={56 + i * 21}
          y={122 - h}
          width={13}
          height={h}
          rx={2}
          fill={ACCENT}
          fillOpacity={0.3 + i * 0.1}
        />
      ))}
      <Link x1={52} y1={122} x2={184} y2={122} />
    </g>
  );
}

/** Phone with a balance card and a transaction list. */
function MobileApp() {
  return (
    <g>
      <rect
        x={62}
        y={8}
        width={76}
        height={134}
        rx={11}
        fill="var(--c-raised)"
        stroke={LINE}
        strokeWidth="1.6"
      />
      <rect x={88} y={13} width={24} height={4} rx={2} fill={LINE} />

      <rect
        x={70}
        y={26}
        width={60}
        height={34}
        rx={5}
        fill={ACCENT}
        fillOpacity={0.9}
      />
      <rect
        x={76}
        y={33}
        width={22}
        height={3}
        rx={1.5}
        fill="var(--c-page)"
        opacity={0.75}
      />
      <rect
        x={76}
        y={42}
        width={38}
        height={6}
        rx={3}
        fill="var(--c-page)"
        opacity={0.95}
      />
      <circle cx={120} cy={52} r={4} fill="var(--c-page)" opacity={0.55} />

      {[68, 84, 100].map((y, i) => (
        <g key={y}>
          <circle cx={78} cy={y + 5} r={5} fill={ACCENT} fillOpacity={0.22} />
          <Bar x={88} y={y + 1} w={30} />
          <Bar x={88} y={y + 8} w={18} opacity={0.6} />
          <Bar x={120} y={y + 3} w={10} h={4} accent={i === 0} />
        </g>
      ))}

      <Link x1={68} y1={122} x2={132} y2={122} />
      {[80, 100, 120].map((cx, i) => (
        <circle
          key={cx}
          cx={cx}
          cy={131}
          r={3.5}
          fill={ACCENT}
          fillOpacity={i === 0 ? 0.8 : 0.22}
        />
      ))}
    </g>
  );
}

/** Browser window over a card grid. */
function WebPage() {
  return (
    <g>
      <rect
        x={12}
        y={18}
        width={176}
        height={114}
        rx={6}
        fill="var(--c-raised)"
        stroke={LINE}
        strokeWidth="1.4"
      />
      <path
        d="M12 24 a6 6 0 0 1 6-6 h164 a6 6 0 0 1 6 6 v8 H12 z"
        fill={ACCENT}
        fillOpacity={0.12}
      />
      {[20, 28, 36].map((cx) => (
        <circle key={cx} cx={cx} cy={25} r={2.5} fill={FAINT} opacity={0.5} />
      ))}
      <rect
        x={48}
        y={21}
        width={80}
        height={7}
        rx={3.5}
        fill={FAINT}
        opacity={0.18}
      />

      <rect
        x={22}
        y={42}
        width={72}
        height={46}
        rx={4}
        fill={ACCENT}
        fillOpacity={0.16}
      />
      <Bar x={104} y={46} w={64} h={5} accent />
      <Bar x={104} y={58} w={74} />
      <Bar x={104} y={68} w={58} opacity={0.7} />
      <rect
        x={104}
        y={78}
        width={30}
        height={11}
        rx={3}
        fill={ACCENT}
        fillOpacity={0.55}
      />

      {[0, 1, 2].map((i) => (
        <rect
          key={i}
          x={22 + i * 52}
          y={100}
          width={44}
          height={22}
          rx={4}
          fill="none"
          stroke={LINE}
          strokeWidth="1.3"
        />
      ))}
    </g>
  );
}

/** A runner, obstacles and a score readout. */
function Game() {
  return (
    <g>
      <rect
        x={40}
        y={14}
        width={120}
        height={122}
        rx={10}
        fill="var(--c-raised)"
        stroke={LINE}
        strokeWidth="1.6"
      />
      <rect
        x={40}
        y={14}
        width={120}
        height={122}
        rx={10}
        fill={ACCENT}
        fillOpacity={0.05}
      />

      <Bar x={52} y={28} w={22} />
      <Bar x={124} y={26} w={24} h={5} accent />

      <circle cx={72} cy={78} r={11} fill={ACCENT} fillOpacity={0.85} />
      <circle cx={68} cy={75} r={2} fill="var(--c-page)" />
      <path
        d="M60 62 q6-8 14-4"
        fill="none"
        stroke={ACCENT}
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity={0.5}
      />

      {[110, 132].map((x, i) => (
        <rect
          key={x}
          x={x}
          y={i === 0 ? 82 : 74}
          width={12}
          height={i === 0 ? 22 : 30}
          rx={2}
          fill={ACCENT}
          fillOpacity={0.3}
        />
      ))}

      <Link x1={48} y1={104} x2={152} y2={104} accent />
      {[54, 78, 102, 126, 150].map((x) => (
        <circle key={x} cx={x} cy={112} r={2} fill={FAINT} opacity={0.35} />
      ))}
    </g>
  );
}

/** Two wrist signals crossing through an attention map into a decision. */
function ImuAttention() {
  const wave = (y, amp, phase) => {
    const pts = [];
    for (let i = 0; i <= 28; i += 1) {
      const x = 12 + i * 1.9;
      const v =
        y +
        Math.sin(i * 0.55 + phase) * amp +
        Math.sin(i * 1.4 + phase) * (amp * 0.35);
      pts.push(`${i === 0 ? "M" : "L"}${x.toFixed(1)} ${v.toFixed(1)}`);
    }
    return pts.join(" ");
  };

  const cells = [];
  for (let r = 0; r < 5; r += 1) {
    for (let c = 0; c < 5; c += 1) {
      cells.push(
        <rect
          key={`${r}-${c}`}
          x={82 + c * 10}
          y={40 + r * 10}
          width={8.5}
          height={8.5}
          rx={1.5}
          fill={ACCENT}
          fillOpacity={0.12 + Math.abs(Math.sin(r * 1.7 + c * 0.9)) * 0.7}
        />,
      );
    }
  }

  return (
    <g>
      {[
        [40, 9, 0],
        [96, 7, 1.2],
      ].map(([y, amp, phase], i) => (
        <g key={i}>
          <circle
            cx={12}
            cy={y}
            r={5}
            fill={ACCENT}
            fillOpacity={i === 0 ? 0.7 : 0.35}
          />
          <path
            d={wave(y, amp, phase)}
            fill="none"
            stroke={ACCENT}
            strokeWidth="1.5"
            strokeOpacity={i === 0 ? 0.9 : 0.55}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Link x1={68} y1={y} x2={82} y2={i === 0 ? 52 : 82} accent />
        </g>
      ))}

      <rect
        x={80}
        y={38}
        width={54}
        height={54}
        rx={4}
        fill="none"
        stroke={LINE}
        strokeWidth="1.3"
      />
      {cells}

      <Link x1={134} y1={65} x2={152} y2={65} accent />
      <Box x={152} y={44} w={38} h={42} />
      <Bar x={158} y={54} w={26} h={5} accent />
      <Bar x={158} y={66} w={17} h={5} />
      <text
        x={100}
        y={122}
        textAnchor="middle"
        fontSize="9.5"
        fill={FAINT}
        fontFamily="ui-monospace, monospace"
      >
        cross-attention
      </text>
    </g>
  );
}

/** Storm frames compressed to a latent, then rolled forward. */
function Cyclone() {
  const spiral = (cx, cy, s) => {
    const pts = [];
    for (let t = 0; t < 34; t += 1) {
      const a = t * 0.42;
      const r = 0.55 * a * s;
      pts.push(
        `${t === 0 ? "M" : "L"}${(cx + Math.cos(a) * r).toFixed(1)} ${(
          cy +
          Math.sin(a) * r
        ).toFixed(1)}`,
      );
    }
    return pts.join(" ");
  };

  const Frame = ({ x, y, s, dashed, opacity }) => (
    <g opacity={opacity}>
      <rect
        x={x}
        y={y}
        width={34}
        height={34}
        rx={3}
        fill={ACCENT}
        fillOpacity={0.07}
        stroke={ACCENT}
        strokeWidth="1.2"
        strokeOpacity={0.5}
        strokeDasharray={dashed ? "3 3" : undefined}
      />
      <path
        d={spiral(x + 17, y + 17, s)}
        fill="none"
        stroke={ACCENT}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </g>
  );

  const latent = [];
  for (let r = 0; r < 3; r += 1) {
    for (let c = 0; c < 3; c += 1) {
      latent.push(
        <rect
          key={`${r}-${c}`}
          x={84 + c * 11}
          y={54 + r * 11}
          width={9}
          height={9}
          rx={1.5}
          fill={ACCENT}
          fillOpacity={0.2 + ((r * 3 + c) % 4) * 0.2}
        />,
      );
    }
  }

  return (
    <g>
      <Frame x={8} y={20} s={0.72} opacity={0.45} />
      <Frame x={16} y={42} s={0.8} opacity={0.7} />
      <Frame x={24} y={64} s={0.9} opacity={1} />
      <Link x1={60} y1={81} x2={80} y2={70} accent />

      <rect
        x={82}
        y={52}
        width={35}
        height={35}
        rx={4}
        fill="none"
        stroke={LINE}
        strokeWidth="1.3"
      />
      {latent}
      <text
        x={99}
        y={100}
        textAnchor="middle"
        fontSize="8.5"
        fill={FAINT}
        fontFamily="ui-monospace, monospace"
      >
        latent
      </text>
      <Link x1={117} y1={70} x2={136} y2={81} accent />

      <Frame x={140} y={64} s={0.95} dashed opacity={1} />
      <Frame x={150} y={40} s={0.85} dashed opacity={0.7} />
      <Frame x={158} y={18} s={0.75} dashed opacity={0.45} />

      <path
        d="M128 118 h44"
        stroke={ACCENT}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity={0.6}
      />
      <path
        d="M166 113 l6 5 -6 5"
        fill="none"
        stroke={ACCENT}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={0.6}
      />
      <text
        x={124}
        y={121}
        textAnchor="end"
        fontSize="8.5"
        fill={FAINT}
        fontFamily="ui-monospace, monospace"
      >
        +3h
      </text>
    </g>
  );
}

const DIAGRAMS = {
  microservices: Microservices,
  rag: Rag,
  braille: Braille,
  sdn: Sdn,
  fpga: Fpga,
  schema: Schema,
  dashboard: Dashboard,
  mobile: MobileApp,
  web: WebPage,
  game: Game,
  imu: ImuAttention,
  cyclone: Cyclone,
};

/**
 * `kind` selects the diagram; the surrounding card supplies `--cat`, so the
 * drawing arrives already tinted for its category.
 *
 * The svg is absolutely positioned on purpose: in flow, its 4:3 intrinsic
 * ratio sets the flex item's `min-height: auto` and silently beats whatever
 * `aspect-*` the container asked for. Containers must therefore be
 * `relative` — and should carry `bg-surface`, since a viewBox narrower than
 * the box letterboxes.
 */
export default function Thumbnail({ kind, className = "" }) {
  const Diagram = DIAGRAMS[kind] ?? DIAGRAMS.web;

  return (
    <svg
      viewBox="0 0 200 150"
      role="img"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
      className={`absolute inset-0 h-full w-full ${className}`}
    >
      <rect width="200" height="150" fill="var(--c-surface)" />
      <Diagram />
    </svg>
  );
}
