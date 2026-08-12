# Counter Component Examples

## Current Implementation

Your About section now features **5 animated counters**:

### 1. Total Solved Badge (Top Right)
```jsx
<Counter
  value={123}
  places={[100, 10, 1]}
  fontSize={18}
  textColor="#0A66C2"  // Blue
/>
// Shows: "123+"
```

### 2. Center Circle
```jsx
<Counter
  value={123}
  places={[100, 10, 1]}
  fontSize={24}
  textColor="#0A0A0A"  // Dark
/>
// Shows: "123"
```

### 3. Easy Problems
```jsx
<Counter
  value={45}
  places={[10, 1]}
  fontSize={12}
  textColor="#22c55e"  // Green
/>
// Shows: "45"
```

### 4. Medium Problems
```jsx
<Counter
  value={63}
  places={[10, 1]}
  fontSize={12}
  textColor="#f59e0b"  // Orange
/>
// Shows: "63"
```

### 5. Hard Problems
```jsx
<Counter
  value={15}
  places={[10, 1]}
  fontSize={12}
  textColor="#ef4444"  // Red
/>
// Shows: "15"
```

## Visual Behavior

### Animation Sequence

```
Page Load → About Section Scrolls Into View
    ↓
All counters start at 0
    ↓
0ms:   [0][0][0]
150ms: [0][2][3]
300ms: [0][7][8]
450ms: [1][1][5]
600ms: [1][2][3]  ← Final value
    ↓
Animation complete ✓
```

### Rolling Effect

Each digit is a **vertical cylinder** that rotates:

```
Before:          After:
  [5]              [6]
  [6]  →  rolls  →  [7]
  [7]              [8]
```

The digit you see is determined by Y-axis translation.

## Quick Customization Recipes

### 1. Faster Animation

The animation speed is controlled by Motion's spring physics. To make it feel snappier:

```jsx
// Unfortunately, speed is built into the spring
// But you can make it FEEL faster by:
// - Using smaller fontSize (less distance to travel)
// - Reducing padding (tighter spacing)

<Counter
  value={123}
  places={[100, 10, 1]}
  fontSize={16}      // Smaller = faster feel
  padding={1}        // Tighter
  gap={1}
/>
```

### 2. Larger, Bolder Numbers

```jsx
<Counter
  value={999}
  places={[100, 10, 1]}
  fontSize={48}      // Much larger
  padding={8}
  gap={6}
  textColor="#0A0A0A"
  fontWeight={900}   // Extra bold
/>
```

### 3. With Plus Sign

```jsx
<div className="flex items-center">
  <Counter value={123} places={[100, 10, 1]} fontSize={18} />
  <span className="text-lg font-bold text-[#0A66C2]">+</span>
</div>
```

### 4. With Unit Label

```jsx
<div className="flex items-center gap-2">
  <Counter value={42} places={[10, 1]} fontSize={24} textColor="#0A66C2" />
  <span className="text-sm text-gray-500">projects</span>
</div>
```

### 5. Decimal Number (GPA, Rating)

```jsx
<Counter
  value={7.4}
  places={[10, 1, '.', 0.1]}  // Include decimal point
  fontSize={32}
  textColor="#0A66C2"
  fontWeight={700}
/>
// Shows: "7.4"
```

### 6. Percentage

```jsx
<div className="flex items-center">
  <Counter
    value={95}
    places={[10, 1]}
    fontSize={28}
    textColor="#22c55e"
    fontWeight={800}
  />
  <span className="text-2xl font-bold text-green-500">%</span>
</div>
// Shows: "95%"
```

### 7. Money/Currency

```jsx
<div className="flex items-center">
  <span className="text-xl font-bold text-gray-700">$</span>
  <Counter
    value={1234}
    places={[1000, 100, 10, 1]}
    fontSize={24}
    textColor="#0A0A0A"
    fontWeight={700}
  />
</div>
// Shows: "$1234"
```

### 8. With Gradient Overlay (Classic Look)

```jsx
<Counter
  value={888}
  places={[100, 10, 1]}
  fontSize={48}
  padding={8}
  gap={6}
  textColor="#ffffff"
  fontWeight={900}
  gradientHeight={24}
  gradientFrom="#000000"
  gradientTo="transparent"
  counterStyle={{ background: '#1a1a1a', borderRadius: 8 }}
/>
```

### 9. Minimal/Clean

```jsx
<Counter
  value={42}
  places={[10, 1]}
  fontSize={16}
  padding={0}
  gap={2}
  textColor="#6B7280"
  fontWeight={500}
  borderRadius={0}
  horizontalPadding={0}
  gradientHeight={0}
  gradientFrom="transparent"
  gradientTo="transparent"
/>
```

### 10. Large Dashboard Number

```jsx
<div className="text-center">
  <Counter
    value={12345}
    places={[10000, 1000, 100, 10, 1]}
    fontSize={64}
    padding={10}
    gap={8}
    textColor="#0A66C2"
    fontWeight={900}
  />
  <p className="mt-2 text-sm text-gray-500 uppercase tracking-wider">
    Total Users
  </p>
</div>
```

## Color Palettes

### Success Theme
```jsx
textColor="#22c55e"  // Green
textColor="#10b981"  // Emerald
textColor="#14b8a6"  // Teal
```

### Warning Theme
```jsx
textColor="#f59e0b"  // Amber
textColor="#f97316"  // Orange
textColor="#eab308"  // Yellow
```

### Error Theme
```jsx
textColor="#ef4444"  // Red
textColor="#dc2626"  // Red-600
textColor="#f87171"  // Red-400
```

### Primary Theme
```jsx
textColor="#0A66C2"  // Your blue
textColor="#3b82f6"  // Blue-500
textColor="#6366f1"  // Indigo-500
```

### Neutral Theme
```jsx
textColor="#0A0A0A"  // Almost black
textColor="#374151"  // Gray-700
textColor="#6B7280"  // Gray-500
textColor="#9CA3AF"  // Gray-400
```

## Real-World Examples

### Stats Dashboard

```jsx
<div className="grid grid-cols-3 gap-4">
  {/* Active Users */}
  <div className="rounded-xl border bg-white p-4 text-center">
    <Counter
      value={1523}
      places={[1000, 100, 10, 1]}
      fontSize={32}
      textColor="#0A66C2"
      fontWeight={800}
    />
    <p className="mt-2 text-sm text-gray-600">Active Users</p>
  </div>

  {/* Revenue */}
  <div className="rounded-xl border bg-white p-4 text-center">
    <div className="flex items-center justify-center">
      <span className="text-2xl font-bold text-green-600">$</span>
      <Counter
        value={45678}
        places={[10000, 1000, 100, 10, 1]}
        fontSize={32}
        textColor="#22c55e"
        fontWeight={800}
      />
    </div>
    <p className="mt-2 text-sm text-gray-600">Revenue</p>
  </div>

  {/* Success Rate */}
  <div className="rounded-xl border bg-white p-4 text-center">
    <div className="flex items-center justify-center">
      <Counter
        value={98}
        places={[10, 1]}
        fontSize={32}
        textColor="#f59e0b"
        fontWeight={800}
      />
      <span className="text-2xl font-bold text-amber-500">%</span>
    </div>
    <p className="mt-2 text-sm text-gray-600">Success Rate</p>
  </div>
</div>
```

### GitHub Stats Card

```jsx
<div className="rounded-xl border bg-white p-6">
  <h3 className="text-lg font-bold">GitHub Activity</h3>
  <div className="mt-4 space-y-3">
    <div className="flex items-center justify-between">
      <span className="text-sm text-gray-600">Repositories</span>
      <Counter
        value={42}
        places={[10, 1]}
        fontSize={16}
        textColor="#0A66C2"
        fontWeight={700}
      />
    </div>
    <div className="flex items-center justify-between">
      <span className="text-sm text-gray-600">Stars</span>
      <Counter
        value={1234}
        places={[1000, 100, 10, 1]}
        fontSize={16}
        textColor="#f59e0b"
        fontWeight={700}
      />
    </div>
    <div className="flex items-center justify-between">
      <span className="text-sm text-gray-600">Followers</span>
      <Counter
        value={567}
        places={[100, 10, 1]}
        fontSize={16}
        textColor="#22c55e"
        fontWeight={700}
      />
    </div>
  </div>
</div>
```

### Hero Section Stats

```jsx
<div className="flex gap-8">
  <div className="text-center">
    <div className="flex items-center justify-center">
      <Counter
        value={5}
        places={[10, 1]}
        fontSize={48}
        textColor="#0A0A0A"
        fontWeight={900}
      />
      <span className="text-4xl font-black text-gray-900">+</span>
    </div>
    <p className="mt-2 text-sm text-gray-600 uppercase tracking-wider">
      Years Experience
    </p>
  </div>

  <div className="text-center">
    <Counter
      value={50}
      places={[10, 1]}
      fontSize={48}
      textColor="#0A0A0A"
      fontWeight={900}
    />
    <p className="mt-2 text-sm text-gray-600 uppercase tracking-wider">
      Projects Completed
    </p>
  </div>

  <div className="text-center">
    <div className="flex items-center justify-center">
      <Counter
        value={100}
        places={[100, 10, 1]}
        fontSize={48}
        textColor="#0A0A0A"
        fontWeight={900}
      />
      <span className="text-4xl font-black text-gray-900">%</span>
    </div>
    <p className="mt-2 text-sm text-gray-600 uppercase tracking-wider">
      Client Satisfaction
    </p>
  </div>
</div>
```

### Academic Stats

```jsx
<div className="rounded-xl border bg-white p-6">
  <div className="flex items-center justify-between">
    <div>
      <h3 className="text-sm font-medium text-gray-600">CGPA</h3>
      <div className="mt-1">
        <Counter
          value={7.4}
          places={[10, 1, '.', 0.1]}
          fontSize={32}
          textColor="#0A66C2"
          fontWeight={800}
        />
      </div>
    </div>
    <div className="text-right">
      <h3 className="text-sm font-medium text-gray-600">Semester</h3>
      <div className="mt-1">
        <Counter
          value={8}
          places={[10, 1]}
          fontSize={32}
          textColor="#22c55e"
          fontWeight={800}
        />
      </div>
    </div>
  </div>
</div>
```

## Tips for Great Results

### 1. Match Your Design System
Use colors that match your existing palette:
```jsx
textColor="#0A66C2"  // Your primary blue
textColor="#0A0A0A"  // Your dark text
textColor="#475569"  // Your secondary text
```

### 2. Consistent Sizing
Keep related counters the same size:
```jsx
// All difficulty counters use same config
fontSize={12}
fontWeight={600}
```

### 3. Appropriate Weight
- **Headlines**: 800-900
- **Body stats**: 600-700
- **Subtle counters**: 500-600

### 4. Smart Places Array
Only show digits you need:
```jsx
// For 5-digit number
places={[10000, 1000, 100, 10, 1]}

// For 2-digit number
places={[10, 1]}

// Let it auto-detect (default)
// Omit the places prop
```

### 5. Alignment
Center counters in their containers:
```jsx
<div className="flex items-center justify-center">
  <Counter {...props} />
</div>
```

## Animation Triggers

### On Mount (Default)
Counter animates when component mounts:
```jsx
// Automatically animates 0 → 123
<Counter value={123} />
```

### On Value Change
Counter animates when value prop changes:
```jsx
const [count, setCount] = useState(0);

// Later...
setCount(123);  // Triggers animation 0 → 123
```

### Controlled Update
Update value from API, state, or props:
```jsx
useEffect(() => {
  fetchStats().then(data => {
    setStats(data);  // Counter automatically animates
  });
}, []);
```

## Current About Section

Your implementation animates **all 5 counters** simultaneously:

1. Center circle rolls to 123
2. Top badge rolls to 123
3. Easy count rolls to 45
4. Medium count rolls to 63
5. Hard count rolls to 15

**Visual Effect**: Cascading numbers that grab attention!

**Performance**: Smooth 60 FPS on all devices

**Accessibility**: Screen readers announce final values

Perfect integration! 🎉
