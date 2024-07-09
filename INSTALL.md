# Steps to create the project

## Create next project

```
npx create-next-app@latest
```

## Test if tailwind is working

Update page.tsx to code bellow

```
export default function Home() {
    return (
        <div>
            <p className="text-red-500">Hello World!</p>
        </div>
    );
}
```

## Test lint

```
yarn lint
```

## Install Shaqcn

```
npx shadcn-ui@latest init
```
