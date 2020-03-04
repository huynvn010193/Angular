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

+ Life cycle hook: 

  Khi một component được khởi tạo, sau khi hoàn thành hàm constructor, Angular sẽ gọi đến hook **ngOnChanges**. **ngOnChanges** bắt các thay đổi của giá trị khởi tạo được truyền vào component, được lặp đi lặp lại nhiều lần trong suốt vòng đời của component. - Kết thúc **ngOnChanges**, Angular tiếp tục gọi đến **ngOnInit**. Đây là hook được gọi một lần duy nhất, ngay sau khi **ngOnChanges** đầu tiên hoàn tất. - Tiếp đó, Component tiến hành render view, truyền dữ liệu vào view, Angular gọi đến hook **ngAfterContentInit** và khi hoàn tất gọi đến hook **ngAfterContentChecked** sau khi đã kiểm tra dữ liệu lấy từ bên ngoài vào view. - Khi render view của component, Angular gọi đến **ngAfterViewInit**, sau đó gọi hook **ngAfterViewChecked** khi đã kiểm tra xong dữ liệu trên view của component - Cuối cùng, khi ta gọi đến hàm hủy của Class, Angular sẽ gọi và thực hiện các hành động trong hook **ngOnDestroy** trước khi thực hiện hàm hủy và kết thúc vòng đời của component. ## Cách dùng các component lifecycle hooks

  ngDoCheck: Phát hiện và thực hiện thay đổi. Được gọi mỗi khi tìm thấy thay đổi 