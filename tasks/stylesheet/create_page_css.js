import { CustomFile } from '../common/files_actions.js';
import { CustomFolder } from '../common/folders_actions.js';
import { FileName } from  '../common/filename_actions.js';

export class ReactPageScss
{
    constructor(page_name)
    {
      let filename              =  new FileName();
      this.lower_page_name      =  filename.lowercaseFirstLetter(page_name);
      this.capital_page_name    =  filename.capitalizeFirstLetter(page_name);
      this.child_files          = ['Desktop', 'Tablet', 'Mobile', 'Index'];
      this.page_folder_path     = './src/styles/pages';
      this.page_path            = './src/styles/pages/'+page_name;
      this.task_path            = './Tasks/tasks/templates/scss_index.scss';
    }

    generate_css_file()
    {
      for( var filename of this.child_files)
      {
        let new_file_path = this.create_folder(filename);
        this.create_file(filename, new_file_path);
      }
    }

    create_folder(filename)
    {
        let customFolder    = new CustomFolder();
        let new_folder_path = this.page_folder_path+`/${this.lower_page_name}`;
        customFolder.create_folder(new_folder_path);
        return new_folder_path;
    }

    create_file(filename, new_file_path)
    {
      let customFile      = new CustomFile();
      new_file_path       = new_file_path+`/${filename}.scss`;
      customFile.create_file( new_file_path );
      if(filename =='Index')
      {
        customFile.copy_file( this.task_path, new_file_path );
      }

    }

}
