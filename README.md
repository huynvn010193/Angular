# Angular
Create Component: ng g c my-component  --skipTests

#Install boostrap 3: npm install bootstrap@3.3.7


Cofig space boostrap: 
So to summarize:
In order to set angular compiler options in AOT compile (ng serve --aot, ng build --prod) you must alter the tsconfig.app.json to include:

"angularCompilerOptions": {
  "preserveWhitespaces": true
},
In order to set angular compiler options in JIT compile (ng serve) you must alter main.ts specifically the bootstrapModule call:

platformBrowserDynamic().bootstrapModule(AppModule, {
  preserveWhitespaces: true
})
.catch(err => console.log(err));
To be consistent between JIT and AOT, you must alter both files!

# Kiến thức : 
  + encapsulation: ViewEncapsulation: 
    - None: Sẽ bao componet này nữa => khi parent nào sử dụng sẽ bị thay đổi theo. => đưa style thành global
    - Native: Sẽ không nhận từ parent lẫn global
    - Emulated (default): nếu parent and global có thì sẽ nhận của global.

